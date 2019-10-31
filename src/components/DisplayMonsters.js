import React from 'react';
import './DisplayMonsters.css';

function DisplayMonsters(props){
  return(
  <div id="pagePrinc">
    <figure className="DisplayMonster">
      <img src={props.monster.picture} alt={props.monster.name} />
      <figcaption className="info">
        <h2>{props.monster.name}</h2>
        <p>{props.monster.description}</p>
      </figcaption> 
    </figure>
  </div>
  )
}

export default DisplayMonsters;