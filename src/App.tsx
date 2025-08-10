import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import PokemonList from './pages/PokemonList'
import MathsPanel from './pages/MathsPanel'
import PokemonDetail from './pages/PokemonDetail'
import StarWarsPage from './pages/StarWarsPage'
import StarWarsDetail from './pages/StarWarsDetail'

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: (theme: string) => { }
});

function App() {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <header>
          <p>Example button toggle</p>
          <button onClick={() => {
            console.log(`Theme changed to: ${theme === 'light' ? 'dark' : 'light'}`)
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}>
            Toggle Theme
          </button>
        </header>
      </div>
      <div>
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/pokemon">Pokémon</Link>
          <Link to="/maths">Maths</Link>
          <Link to="/star-wars">Star Wars</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/maths" element={<MathsPanel />} />
          <Route path='/star-wars' element={<StarWarsPage />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
          <Route path='/star-wars/:index' element={<StarWarsDetail />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
