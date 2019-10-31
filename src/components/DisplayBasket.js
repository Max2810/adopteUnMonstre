import React from 'react';
import './DisplayBasket.css';

function DisplayBasket(props){
  return(
  <div id="dispBask">
      {(props.monstresBasket).map((url) => (
      <img src= {url} alt="avatarimage"/>
    ))}
   
  </div>
  )
}

export default DisplayBasket

