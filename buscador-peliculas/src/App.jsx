import React, { useState, useEffect } from 'react';
import './components/Pokemons.css';
import { getPokemons } from './services/pokemons';  // Asegúrate de tener este import correcto

const Pokemons = ({ pokemons }) => {
  return (
    <ul className='pokemons'>
      {pokemons.map((pokemon, index) => (
        <li className='pokemon' key={index}> {/* Usamos index como key ya que la API no proporciona id */}
          <h2>{pokemon.name}</h2>
          <p>{pokemon.url}</p> {/* Mostramos la URL del pokemon para identificarlo */}
        </li>
      ))}
    </ul>
  );
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons()
      .then(data => {
        setPokemons(data);  // Aquí data es el array de pokemons
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching pokemons:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando pokemons...</div>;
  }

  return (
    <page>
      <header>
        <h1>Pokedex</h1>
        <form>
          <input type="text" placeholder='Bulbasaur, Charmeleon, Pikachu' />
          <button>Buscar Pokémon</button>
        </form>
      </header>
      <main>
        <Pokemons pokemons={pokemons} />  {/* Pasamos los pokemons como prop */}
      </main>
    </page>
  );
}

export default App;