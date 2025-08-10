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
    const [gifUrl, setGifUrl] = useState<string | null>(null);
    // const [showGif, setShowGif] = useState(false);
    const personId = Number(index) + 1;

    const fetchGif = async () => {
        const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
        const randomNumber = Math.floor(Math.random() * 20);
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${person.name}&limit=20`);
        const data = await response.json();
        const url = data.data[randomNumber]?.images?.downsized_large?.url;
        setGifUrl(url || null);
    };

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

    useEffect(() => {
        fetchGif();
    }, [person]);

    if (!person) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h2>Star Wars Detail page</h2>
            <div>
                <h3>{person.name}</h3>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
            </div>

            {gifUrl && (
                <div>
                    <img src={gifUrl} alt="GIF" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </>)
}