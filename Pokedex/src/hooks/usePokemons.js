import { useRef, useState } from "react"
import { searchPokemons } from "../services/searchPokemons"


export function usePokemons (search) {
    const [searchedPokemon, setSearchedPokemon] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)

        const getPokemons = async () => {
          if (search === previousSearch.current) return

                setLoading(true)
                setError(null)
                setSearchedPokemon(null)

            try {
                previousSearch.current = search
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
        }

    return { searchedPokemon, error, loading, getPokemons }
    
}