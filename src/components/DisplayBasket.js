import React from 'react';
import './DisplayBasket.css';

function DisplayBasket(props){
  return(
  <div id="dispBask">
    <img src={(props.monstresBasket).map(url => url)} alt="avatarimage"></img>
    
      {console.log(props.monstresBasket)}
      
   
  </div>
  )
}

export default DisplayBasket

//<img src={(props.monstresBasket).map(url => url)} alt="avatarimage"></img>
//<img src={props.monstresBasket} alt="avatarimage"></img>