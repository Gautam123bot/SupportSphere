import React from 'react'
import Regis from '../components/Rregister/Regis'
import Footer from "../components/Footer/Footer"
import { Navbar } from '../components/Navbar/Navbar'

function Register() {
  return (
    <div>
      {/* this is register page */}
        <Navbar />
        <Regis />
        <Footer />
        
    </div>
  )
}

export default Register
