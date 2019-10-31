import React from 'react';
import './DisplayBasket.css';

function DisplayBasket(props){
  return(
  <div id="dispBask">
    <h2>Mon panier</h2>
    <img src={(props.monstresBasket).map(url => url)} alt="avatarimage"></img> 
  </div>
  )
}

export default DisplayBasket

