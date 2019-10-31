import React from 'react';
import './DisplayBasket.css';

function DisplayBasket(props){
  return(
  <div id="dispBask">
    <h2>Mon panier</h2>
    {props.monstresBasket.map((monster) => <img src = {monster}/>)}


   
  </div>
  )
}

export default DisplayBasket

