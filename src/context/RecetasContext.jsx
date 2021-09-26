import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

    const [busqueda, buscarRecetas] = useState({
        ingrediente: '',
        categoria: ''
    })

    const [recetas, setRecetas] = useState([])
    const [consultar, setConsultar] = useState(false)

    const { nombre, categoria } = busqueda

    useEffect(() => {
        if(consultar){        
            const obtenerRecetas = async () => {            
                    const url = (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`)
                    
                    const resultado = await axios.get(url)

                    setRecetas(resultado.data.drinks)
            }
            obtenerRecetas()
        }
        setConsultar(false)    
        // eslint-disable-next-line
    }, [busqueda])
    

    return (
        <RecetasContext.Provider
          value={{
            recetas,
            buscarRecetas,
            setConsultar
          }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider