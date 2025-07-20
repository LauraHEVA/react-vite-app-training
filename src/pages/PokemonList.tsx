import React from 'react';
import Title from '../components/title/Title';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PokemonList() {
    const [pokemonsList, setPokemonsList] = useState<{ name: string; url: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
            .then(response => {
                if (!response.ok) throw new Error('Error al obtener los Pokémon')
                return response.json()
            })
            .then(data => {
                setPokemonsList(data.results)
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading Pokémons info...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <Title text="Pokémons List" />
            <ul>
                {pokemonsList.map((pokemon, index) => (
                    <li key={pokemon.name}>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}