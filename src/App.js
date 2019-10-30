import React from 'react';
import axios from 'axios'
import DisplayMonsters from './components/DisplayMonsters';


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
      monster: sampleMonster
    };
    this.getMonster = this.getMonster.bind(this);
  }

  

  getMonster() {
    axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
      .then(response => response.data)
      .then(data =>{
        console.log(data);
        this.setState({
                    monster: data.monsters[hasardMonster(19)],
        });
      });
  }

render() {
    return (
    <div>
      <DisplayMonsters monster={this.state.monster}/>
      <button type="button" onClick={this.getMonster}>Get another monster</button>
    </div>
  );
}}

export default App;

