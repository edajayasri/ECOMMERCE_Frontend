import './App.css'

import { useState } from "react"

import Register from './Register'
import Login from '../Login.jsx'
import Header from './Header'
import Products from './Products.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import { Routes, Route } from "react-router-dom"

function App() {
  const [search, setsearch] = useState('')

  return (
    <>
      <section style={{ textAlign: "center" }}>
        <Header setsearch={setsearch} />
      </section>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products search={search} />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App