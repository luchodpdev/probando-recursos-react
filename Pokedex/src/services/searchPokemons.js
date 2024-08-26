export const searchPokemons = async (search) => {
    if (search.trim() === '') {
      throw new Error('Por favor, introduce un nombre válido.');
    }
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('No se encontró Pokémon');
      }
      return await response.json();
    } catch (e) {
      throw new Error(e.message);
    }
  };