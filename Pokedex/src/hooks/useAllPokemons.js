import { useState, useEffect } from "react"
import { ALL_POKEMONS_ENDPOINT } from "../services/pokemons.js"

export const useAllPokemons = (search) => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(ALL_POKEMONS_ENDPOINT)
                const data = await response.json()
                setPokemons(data.results)
             } catch (error){
                setError(true)
             } finally {
                setLoading(false)
             }
           
        }

        fetchData()

    }, [search])
    
    return { pokemons, loading, error }
}