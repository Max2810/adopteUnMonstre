import React from 'react';
import './DisplayMonsters.css';

function DisplayMonsters(props){
  return(
  <div className="monster">
    <figure className="DisplayMonster">
      <img src={props.monster.picture} alt={props.monster.name} />
    <figcaption>
      <h2>{props.monster.name}</h2>
      <figure>{props.monster.description}</figure>
    </figcaption> 
    </figure>
  </div>
  )
}

export default DisplayMonsters;