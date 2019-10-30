import React from 'react';
import axios from 'axios'
import DisplayMonsters from './components/DisplayMonsters';


 const sampleMonster = 
 {
  "id": 8,
  "name": "Vampire Red Baron",
  "level": 6,
  "attack": 2400,
  "defense": 1000,
  "picture": "https://nsa40.casimages.com/img/2019/10/17/191017042747190462.jpg",
  "description": "Once per turn: You can pay 1000 LP, then target 1 monster...",
  "createdAt": "2019-10-18T09:41:03.307Z",
  "updatedAt": "2019-10-18T09:41:03.307Z"
};

function hasardMonster(max){
	return Math.floor(Math.random()*max);
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: ''
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

