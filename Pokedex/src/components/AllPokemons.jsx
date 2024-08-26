import { useEffect, useState } from "react"
import { POKEMONS_IMG_ENDPOINT } from "../services/pokemons"

export const AllPokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then((response) => response.json())
        .then((data) => {
            setPokemons(data.results)
            setLoading(false)
        })
        .catch(() => {
            setError(true)
            setLoading(false)
        })
        if (error) return <h3>Error fetching data</h3>
    }, [])

    return (
            loading 
            ? <h3>Loading all Pokémon...</h3>
            :
            <div className="pokemons">
                <ul>
              {pokemons.map((pokemon, index) => (
              <li key={index}>
                <h3>{pokemon.name}</h3>
                <img alt={pokemon.name} src={`${POKEMONS_IMG_ENDPOINT}/${index + 1}.png`} />
              </li>
            ))}
            </ul>
            </div>
            
            
          
    )
}