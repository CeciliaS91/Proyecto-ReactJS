import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'

const ProductList = () => {

  const {productos, productosFiltrados, busqueda, setBusqueda} = useContext(CartContext)
  return (
    <>
      <h2>Galeria de Productos</h2>
      
      <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        {
          productosFiltrados.map(producto => (
            <Productos key={producto.id} producto={producto}/>
          ))
        } 
      </div>

    </>
  )
}

export default ProductList
