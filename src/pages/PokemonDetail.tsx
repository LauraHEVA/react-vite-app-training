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

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_POKEMON_API}/pokemon/${name}`)
            .then(res => res.json())
            .then(data => setPokemon(data))
    }, [name])

    if (!pokemon) return <p>Cargando...</p>

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
        </div>
    );
}