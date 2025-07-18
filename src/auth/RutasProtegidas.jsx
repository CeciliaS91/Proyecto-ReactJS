import React from 'react'
import { Navigate } from 'react-router-dom'

const RutasProtegidas = ({isAuthenticated, children}) => {
    if (!isAuthenticated){
        return <Navigate to="/login" replace></Navigate>
    }
  return children;
}

export default RutasProtegidas
