import { useState } from 'react';
import './components/Pokemons.css';
import { AllPokemons } from './components/AllPokemons';
import { searchPokemons } from './services/searchPokemons';

function App() {
  const [search, setSearch] = useState('')
  const [searchedPokemon, setSearchedPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSearchedPokemon(null)
    
    try {
      const result = await searchPokemons(search)
      setSearchedPokemon(result)
      setLoading(false)
    } catch (err) {
      setError('Pokémon no encontrado')
      setSearchedPokemon(null)
      setLoading(false)
    }
  }

  

  return (
    <div>
      <header className='searchBar'>
        <h1>Pokedex</h1>
        <form onSubmit={handleSubmit}>
          <input 
          onChange={(e) => setSearch(e.target.value)} 
          value={search} 
          type="text" 
          placeholder='Bulbasaur, Charmeleon, Pikachu' />
          <button>Buscar Pokémon</button>
        </form>
      </header>
      <main>
        {loading && <h3>Buscando Pokémon...</h3>}
        {error && <h3>{error}</h3>}
        {searchedPokemon && (
          <div className='searchedPokemonCard'>
            <h2>{searchedPokemon.name}</h2>
            <img 
            src={searchedPokemon.sprites.front_default} 
            alt={searchedPokemon.name} />
          </div>
        )}
        <AllPokemons />
      </main>
    </div>
  );
}

export default App;