import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null)


    useEffect(() => {
        
        const obtenerReceta = async () =>{
            if(!idReceta) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`

            const resultado = await axios.get(url)
            const datosDeLaBebida = resultado.data.drinks[0]

            console.log(datosDeLaBebida)
        }
        obtenerReceta()
    }, [idReceta])
    

    return (
        <ModalContext.Provider
          value={{
            setIdReceta
          }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider