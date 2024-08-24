const POKEMONS_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

export const getPokemons = async () => {
  const res = await fetch(POKEMONS_ENDPOINT);
  if (!res.ok) {
    throw new Error('Error fetching pokemons');
  }
  const data = await res.json();
  return data.results;  // Aquí devolvemos directamente el array de pokemons
};