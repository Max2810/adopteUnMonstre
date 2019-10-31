import React from 'react';
import axios from 'axios'
import DisplayMonsters from './components/DisplayMonsters';
import Navbar from './components/Navbar';
import DisplayBasket from './components/DisplayBasket';
import MaskButton from './components/MaskButon';

 const sampleMonster = 
  {
    name: "Vampire Red Baron",
    picture: "https://nsa40.casimages.com/img/2019/10/17/191017042747190462.jpg",
    description: "Once per turn: You can pay 1000 LP, then target 1 monster...",
  };

function hasardMonster(max){
	return Math.floor(Math.random()*max);
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: sampleMonster,
      monstresBasket: []
    };
    this.getMonster = this.getMonster.bind(this);
    this.ajoutPanier = this.ajoutPanier.bind(this);
  }

  getMonster() {
    axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
      .then(response => response.data)
      .then(data =>{
        this.setState({
          monster: data.monsters[hasardMonster(19)],
        });
      });
  }

  ajoutPanier() {
    this.setState({monstresBasket: [...this.state.monstresBasket, this.state.monster.picture,]
    })  
  }

render() {
    return (
    <div className="card">
      <Navbar/>
      <DisplayMonsters monster={this.state.monster}/>
      <button type="button" onClick={this.getMonster}>Monstre suivant</button> 
      <button type="button" onClick={this.ajoutPanier}>Ajouter au panier</button>
      <button type="button" onClick={event => MaskButton ('pagePrinc', 'dispBask')}>Mon panier</button>
      <DisplayBasket monstresBasket={this.state.monstresBasket}/>
    </div>
  );
}}

export default App;


