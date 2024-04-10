import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Reg_service() {
  return (
    <div className='main_regis text-center'>
      <div className="serviceman_reg">

        <Link to="/getwork">click here to register as a service men</Link>
      </div>
    
    </div>
  )
}

export default Reg_service
