import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './components/login/Login'
import { Register } from './components/register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App
