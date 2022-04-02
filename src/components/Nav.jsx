import React from 'react'
import logo from '../images/logo.svg'
import {useNavigate} from 'react-router-dom'

 function Nav() {

const navigate= useNavigate()


  return (
    <nav>

    
    <div className="logo-container">

<img className="logo" src={logo} alt="logo" />


    </div>
<div className="controls-container">

<div className="icon" onClick={()=>navigate("./ticket")} > + </div>
<div className="icon" onClick={()=>navigate("./ticket")} > * </div>

</div>

    </nav>

    
  )}

export default Nav