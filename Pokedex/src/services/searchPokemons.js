export const searchPokemons = async (search) => {
    if (search === '') return null
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('No se encontró Pokémon')
      }
      return await response.json()
    } catch (e) {
      throw new Error(e.message)
    }
  }