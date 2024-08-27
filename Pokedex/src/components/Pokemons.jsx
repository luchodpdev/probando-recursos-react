import { usePokemons } from "../hooks/usePokemons"
import { AllPokemons } from "./AllPokemons"

export const Pokemons = ({ search }) => {
    
    const { searchedPokemon, loading, error} = usePokemons(search)

    return (
        <div>
            {loading && <h3>Buscando Pokémon...</h3>}
            {error && <h3>{error}</h3>}
            {search === '' && !loading && !error && <AllPokemons />}
            {searchedPokemon && (
                <div className='searchedPokemonCard'>
                    <h2>{searchedPokemon.name}</h2>
                    <img 
                        src={searchedPokemon.sprites.front_default} 
                        alt={searchedPokemon.name} 
                    />
                    <p>Tipo: {searchedPokemon.types[0].type.name}</p>
                    <p>Peso: {searchedPokemon.weight}lbs</p>
                    <p>Altura: {searchedPokemon.height}m</p>
                    <p>Nro de orden: {searchedPokemon.id}</p>
                </div>
            )}
        </div>
    )
}