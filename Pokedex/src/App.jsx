import { useState } from 'react';
import './components/Pokemons.css';
import { AllPokemons } from './components/AllPokemons';
import { searchPokemons } from './services/searchPokemons';

function App() {
  const [search, setSearch] = useState('')
  const [searchedPokemon, setSearchedPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSearchedPokemon(null)
    
    
    try {
      const result = await searchPokemons(search)
      setSearchedPokemon(result)
      setLoading(false)
      setTodos(null)
    } catch (err) {
      {search === '' 
        ? setError(null)
        : setError('Pokémon no encontrado')}
      setSearchedPokemon(null)
      setLoading(false)
    }
  }

  const handleClick = () => {
    setTodos(true)
  }

  

  return (
    <div>
      <header className='searchBar'>
        <h1>Pokedex</h1>
        <form onSubmit={handleSubmit}>
          <input id='search'
          onChange={(e) => setSearch(e.target.value)} 
          value={search} 
          type="text" 
          placeholder='Bulbasaur, Charmeleon, Pikachu' />
          {search === '' 
          ? <button onClick={handleClick}>Mostrar Todos</button> 
          : <button>Buscar Pokémon</button>}
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
            
            <p>Tipo: {searchedPokemon.types[0].type.name}</p>
            <p>Peso: {searchedPokemon.weight}lbs</p>
            <p>Altura: {searchedPokemon.height}m</p>
            <p>Nro de orden: {searchedPokemon.id}</p>
          </div>
        )}
        {todos === true ? <AllPokemons /> : null}
      </main>
    </div>
  );
}

export default App;