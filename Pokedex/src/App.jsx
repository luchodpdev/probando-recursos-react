import { useState } from 'react';
import './components/Pokemons.css';
import { Pokemons } from './components/Pokemons';

function App() {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick = (e) => {
    e.preventDefault()
    setSearch('')
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
        <Pokemons search={search}/>
      </main>
    </div>
  );
}

export default App;