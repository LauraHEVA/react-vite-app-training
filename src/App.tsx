import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import PokemonList from './pages/PokemonList'
import MathsPanel from './pages/MathsPanel'
import PokemonDetail from './pages/PokemonDetail'

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/pokemon">Pokémon</Link>
        <Link to="/maths">Maths</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/maths" element={<MathsPanel />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  )
}

export default App
