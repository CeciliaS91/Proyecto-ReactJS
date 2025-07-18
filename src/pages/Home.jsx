import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'

const Home = () => {
  const {cargando} = useContext(CartContext)
  return (
    <>
      <Header ></Header>
      <main>
        <h1>Bienvenidos</h1>
        <p>Uso de Api para productos random</p>
       
        {
          cargando ? <img src={loading} alt='loading'/> :

          <ProductList />
          
        }


      </main>
      <Footer></Footer>
    </>
  )
}

export default Home
