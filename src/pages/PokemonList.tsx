

import React, { useEffect, useState } from 'react';
import Title from '../components/title/Title';
import { Link } from 'react-router-dom';

export default function PokemonList() {
    const [pokemonsList, setPokemonsList] = useState<{ name: string; url: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const response = await fetch(`${import.meta.env.VITE_URL_POKEMON_API}/pokemon?limit=25`)
                if (!response.ok) throw new Error('Error al obtener los Pokémon')

                const data = await response.json()
                setPokemonsList(data.results)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemons()
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