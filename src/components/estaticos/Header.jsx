import {useState, useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'
import { CartContext } from '../../context/CartContext'
import {FaShoppingCart}from 'react-icons/fa'

const Header = () => {
const [isCartOpen, setCartOpen] = useState(false)
 const { productosFiltrados, busqueda, setBusqueda} = useContext(CartContext)


  return (
     <header>
      <nav className="navbar navbar-expand-lg  bg-brown" data-bs-theme="dark">
         <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <NavLink to='/' className='link'>Inicio</NavLink></li>
                  <li className="nav-item"><NavLink to='/acercade' className='link'>Nosotros</NavLink></li>
                  <li className="nav-item"><NavLink to='/productos' className='link'>Galeria de productos</NavLink></li>
                  <li className="nav-item"><NavLink to='/contacto' className='link'>Contacto</NavLink></li>

            <li className="nav-item">
              <button className = "btnCart link" onClick={()=>setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
              <Cart isOpen={isCartOpen} onClose={()=> setCartOpen(false) } />
            </li>

            <li className="nav-item">
              <NavLink to='/login' className='link'><i className="fa-solid fa-right-to-bracket"></i></NavLink>
            </li>
          </ul>
         </div>
        </div>
         <form className="d-flex">
                <input className="form-control me-2" 
                aria-label="Search"
                type="text" 
                placeholder='Buscar Productos...'
                value={busqueda}
                onChange={(e)=>setBusqueda(e.target.value)}/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
      </nav>
    </header>

    
  )
}

export default Header
