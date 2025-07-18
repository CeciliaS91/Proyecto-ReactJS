import React, {useContext} from 'react'
import './styleCart.css'
import Header from './estaticos/Header'
import { CartContext } from '../context/CartContext'


const Cart = ({ isOpen, onClose}) => {

  const {cart, handleDeleteFromCart, clearCart}= useContext(CartContext)
 
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2 style={{color:'black' }}>Carrito de compras</h2>
        <button onClick={onClose} className='close-button'>X</button>
      </div>
      <div className='cart-content'>
        {cart.length === 0 ? (
          <p style={{color:'red'}}>Carrito está vacío</p>
          ) : ( <> 
          <ul className='cart-item'>
            {cart.map((item,index)=>(
              <> 
                <li key={item.id} style={{color:'black'}}>
                    {item.nombre} - ${item.precio} - Cant: {item.cantidad}
                    <button onClick={() => handleDeleteFromCart(item)} className='btn-borrar'><i className='fa-solid fa-trash'></i></button>
                </li>
              </>   
            ))}
        </ul>
            <div className='cart-footer'>
              <p style={{color:'blue'}}>Total: ${cart.reduce((total, item)=> total + (item.precio * item.cantidad),0 )}
              </p>
              <button className='btnFinalizar' onClick={() => clearCart()}>Finalizar Compra</button>
            </div>
          </>)}
      </div>

    </div>
  )
}

export default Cart
