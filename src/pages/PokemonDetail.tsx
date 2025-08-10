import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Pokemon = {
    name: string
    height: number
    weight: number
    sprites: {
        front_default: string
    }
};

export default function PokemonDetail() {
    const { name } = useParams<{ name: string }>()
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const [showModal, setShowModal] = useState(false);
    const [gifUrl, setGifUrl] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_POKEMON_API}/pokemon/${name}`)
            .then(res => res.json())
            .then(data => setPokemon(data))
    }, [name])

    if (!pokemon) return <p>Loading...</p>

    const fetchGif = async () => {
        const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
        const randomNumber = Math.floor(Math.random() * 20);
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${name}&limit=25`);
        const data = await response.json();
        const url = data.data[randomNumber]?.images?.downsized_large?.url;
        setGifUrl(url || null);
        setShowModal(true);
    };

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <button onClick={fetchGif}>GIF</button>
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1
                }}>
                    <div style={{
                        background: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        maxWidth: '90%',
                    }}>
                        {gifUrl ? <img src={gifUrl} alt="GIF" style={{ maxWidth: '100%' }} /> : <p>No se encontró GIF</p>}
                        <button onClick={() => setShowModal(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}