import React from "react"
import './ButonPanier.css'


function ButonPanier(props)  {    
  return (
  
    <div>
      <button 
        onClick={event => 
          {alert("In the Basket !")}
        }>Put in the Basket
      </button>
    </div>
  )
}export default ButonPanier;