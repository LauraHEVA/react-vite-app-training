import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type person = {
    name: string,
    height: string,
    mass: string,
}


export default function StarWarsDetail() {
    const { index } = useParams<{ index: string }>()
    const [person, setPerson] = useState<person>();
    const [error, setError] = useState(null);
    const personId = Number(index) + 1;

    useEffect(() => {
        async function fetchPerson() {
            try {
                const response = await fetch(`${import.meta.env.VITE_URL_STAR_WARS_API}people/${personId}`);
                if (!response.ok) throw new Error('Error fetching Star Wars character');

                const data = await response.json();
                setPerson(data);
            } catch (error) {
                setError(error.message)
            }
        }

        fetchPerson();
    }, [index]);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <p>Star Wars Detail Page</p>
            {person ? (
                <div>
                    <h2>{person.name}</h2>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>)
}