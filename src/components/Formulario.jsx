import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

function Formulario() {

    const { categorias } = useContext(CategoriasContext)
    const { buscarRecetas, setConsultar } = useContext(RecetasContext)

    const [busqueda, setBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    })
    
    
    const obtenerDatosReceta = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const realizarBusqueda = (e) => {
        e.preventDefault()
        buscarRecetas(busqueda)
        setConsultar(true)
    }
    

    return (
        <form 
            className="col-12"
            onSubmit={realizarBusqueda}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                      type="text"
                      name="ingrediente"
                      onChange={obtenerDatosReceta}
                      className="form-control"
                      placeholder="Buscar por Ingrediente"
                    />
                </div>
                <div className="col-md-3">
                    <select
                      className="form-control"
                      name="categoria"
                      onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria =>(
                            <option 
                              value={categoria.strCategory} 
                              key={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                      type="submit"
                      className="btn btn-block btn-primary"
                      value="Buscar Bebida"
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario
