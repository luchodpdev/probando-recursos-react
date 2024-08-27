import { useEffect, useState } from "react"
import { searchPokemons } from "../services/searchPokemons"


export function usePokemons (search, showAll) {
    const [searchedPokemon, setSearchedPokemon] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    
    useEffect(() => {    
    
        const fetchPokemons = async () => {
                setLoading(true)
                setError(null)
                setSearchedPokemon(null)

            if (showAll) {
                setLoading(false);
                return; // Skip fetching if showing all Pokémon
                }

            try {
                const result = await searchPokemons(search)
                if (search === '') {
                    setSearchedPokemon(null)
                } else {
                setSearchedPokemon(result)
                }
              } catch (error) {
                setError(search === '' ? null : 'Pokémon no encontrado')
              } finally {
                setLoading(false)
              }
        };

        fetchPokemons()
        
    
    }, [search, showAll])


      
    return { searchedPokemon, error, loading }
    
}