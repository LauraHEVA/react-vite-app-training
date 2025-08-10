import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Home() {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <h1>Home</h1>
            <p>Current theme: {theme}</p>
        </>
    )
}