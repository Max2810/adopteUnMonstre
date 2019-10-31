import React from 'react';
import LogoFinal from './LogoFinal.jpg'
import './Navbar.css'


function Navbar(){
  return(
  <div className='Navbar'>
      <img src={LogoFinal} className='Logo' alt="Logo adopte un monstre" />
  </div>)
}

export default Navbar;