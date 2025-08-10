import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StarWarsPage() {
    const [peopleSWList, setPeopleSWList] = React.useState<{ name: string }[]>([]);
    const [error, setError] = React.useState(null);
    useEffect(() => {
        async function fetchStarWarsPepleData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_URL_STAR_WARS_API}people/`);
                if (!response.ok) throw new Error('Error fetching Star Wars data');
                const data = await response.json();
                setPeopleSWList(data.results);
            } catch (error) {
                setError(error.message)
            }
        }

        fetchStarWarsPepleData();
    }, []);

    if (error) return <p>Error: {error}</p>
    if (!peopleSWList.length) return <p>Loading Star Wars data...</p>;

    return (
        <>
            <h1>Star Wars API</h1>
            <ul>
                {peopleSWList.map((person, index) => (
                    <li key={index}>
                        <Link to={`/star-wars/${index}`}>{person.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}