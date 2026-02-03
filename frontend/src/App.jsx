import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Register from './pages/Register'
import VerifyOtp from './pages/VerifyOtp'
import Login from './pages/Login'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>        
          <Route path='/register' element={<Register/>}></Route>        
          <Route path='/verify-otp' element={<VerifyOtp/>}></Route>        
          <Route path='/login' element={<Login/>}></Route>        
          <Route path='/products' element={<Products/>}></Route>        
          <Route path='/about' element={<About/>}></Route>        
          <Route path='/contact' element={<Contact/>}></Route>        
      </Routes>
    </>
  )
}

export default App