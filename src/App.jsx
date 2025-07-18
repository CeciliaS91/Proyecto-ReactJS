import { useContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contactos from './pages/Contactos'
import GaleriadeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'
import DetallesProductos from './components/DetallesProductos'
import Login from './pages/Login'
import RutasProtegidas from './auth/RutasProtegidas'
import Admin from './pages/Admin'
import { CartContext } from './context/CartContext'

function App() {

  const {isAuthenticated}=useContext(CartContext)

  return (
  
      <Routes>
         <Route path='/' element={<Home/>}/>

         <Route path='/acercade' element={<AcercaDe/>}/>

         <Route path='/productos' element={<GaleriadeProductos/>}/>

         <Route path='/productos/:id' element={<DetallesProductos/>}/>

         <Route path='/contacto' element={<Contactos/>}/>

         <Route path='/admin' element={<RutasProtegidas isAuthenticated={isAuthenticated}> <Admin/> </RutasProtegidas>}/>

         <Route path='/login' element={<Login/>}/>

         <Route path='*' element={<NotFound/>}/>
         
      </Routes>
  )
}

export default App
