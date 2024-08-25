import './components/Pokemons.css';
import { results } from './mocks/pokemons.json'
import { POKEMONS_IMG_ENDPOINT } from './services/pokemons'; 
const pokemons = results

const Pokemons = ({ pokemons }) => {
  
  return (
    <main className='pokemons'>
          <ul>
      {
        pokemons.map((pokemon, index) => (
          <li key={index}>
            <h3>{pokemon.name}</h3>
            <img alt={pokemon.name} src={`${POKEMONS_IMG_ENDPOINT}/${index + 1}.png`} />
          </li>
        ))
      }
    </ul>
    </main>

  )
}

function App() {

  const handleSubmit = () => {
    
  }

  

  return (
    <page>
      <header className='searchBar'>
        <h1>Pokedex</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Bulbasaur, Charmeleon, Pikachu' />
          <button>Buscar Pokémon</button>
        </form>
      </header>
      <main>
        <Pokemons pokemons={pokemons}/>
      </main>
    </page>
  );
}

export default App;