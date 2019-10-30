import React from 'react';
import './DisplayMonsters.css';

function DisplayMonsters(props){
  return(
  <div>
    <figure className="DisplayMonster">
      <img src={props.monster.picture} alt={props.monster.name} />
    <figcaption>
      <figure>{props.monster.description}</figure>
    </figcaption> 
    </figure>
  </div>)
}

export default DisplayMonsters;