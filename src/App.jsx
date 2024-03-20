import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeNavbar from "./components/HomeNavbar"
import Footer from "./components/Footer"
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';


export default function App() {
  return (
       <Router>
        <HomeNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
  )
}
