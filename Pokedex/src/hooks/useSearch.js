import { useEffect, useState } from "react"

export const useSearch = () => {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
  
    useEffect(() => {
 
      if (search === '') {
        setError('Qué Pokémon quieres buscar?')
        return
      }
  
      if (search.match(/^\d+$/)) {
        setError('No se puede buscar un Pokémon con un número')
        return
      }
  
      if (search.length < 3) {
        setError('La búsqueda debe tener al menos 3 caracteres')
        return
      }
    
      setError(null)
  
    }, [search])
    return { search, updateSearch, error }
  }