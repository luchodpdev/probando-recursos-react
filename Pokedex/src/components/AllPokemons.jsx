import { POKEMONS_IMG_ENDPOINT } from "../services/pokemons"
import { useAllPokemons } from "../hooks/useAllPokemons"

export const AllPokemons = () => {
   
    const { pokemons, loading } = useAllPokemons()

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