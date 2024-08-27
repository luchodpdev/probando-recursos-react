import './components/Pokemons.css';
import { Pokemons } from './components/Pokemons';
import { usePokemons } from './hooks/usePokemons';
import { useSearch } from './hooks/useSearch';

function App() {
  const { search, updateSearch, error } = useSearch()
  const { searchedPokemon, loading, error: pokemonError, getPokemons } = usePokemons(search)

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getPokemons(search)
  }

  
  return (
    <div>
      <header className='searchBar'>
        <h1>Pokedex</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange}
            value={search} 
            type="text" 
            placeholder='Bulbasaur, Charmeleon, Pikachu...' />
            {search === '' 
            ? <button>Mostrar Todos</button> 
            : <button>Buscar Pokémon</button>}
        </form>
        {error && <p>{error}</p>}
      </header>

      <main>
        <Pokemons search={search} 
          searchedPokemon={searchedPokemon} 
          loading={loading} 
          error={pokemonError}/>
        
      </main>
    </div>
  )
}

export default App