import React from "react"
import './ButonPanier.css'



function ButonPanier(props) { 
  const monstresBasket = []   
  return (
  
    <div>
      <button 
        onClick={event => {
          monstresBasket.push(props.monster.name);
          console.log(monstresBasket);
          alert(props.monster.name)
        }}>
          Put in the Basket
          
      </button>
      
    </div>
  )

}



export default ButonPanier;

//console.log(props.monster)
//{monstresBasket.push(props.monster)}
//{console.log(monstresBasket)}