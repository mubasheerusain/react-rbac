import { useState } from 'react'
import './App.css'
import { useAuth } from './AuthProvider'
import { Link } from 'react-router-dom';

function App() {
  const { authToken, handleLogin, handleLogout} = useAuth();
  return (
    <>
    <h3>Hello World</h3>
    <Link to="/protected">Protected Route</Link>
    {
      authToken
      ?
      <button onClick={handleLogout}>Logout</button>
      :
      <button onClick={handleLogin}>Login</button>
    }
    </>
  )
}

export default App
