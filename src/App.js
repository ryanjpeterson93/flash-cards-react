import React, { Component } from 'react';
import { Container, Header } from "semantic-ui-react"; 
import './App.css';
import Cards from "./Cards"
import MakeACard from "./MakeACard"



class App extends Component {
  state = {
    cards: [
      { id: 1, front:"This is some text about stuff", back: "back", showFront:true},
      { id: 2, front:"here is some more text about things", back: "back1", showFront:true},
      { id: 3, front:"I wish I was a React Wizard", back: "back2", showFront:true},
    ],
  };

  removeCard = id => {
    const cards =this.state.cards.filter( card => {
      if (card.id !== id)
        return card 
      });
      this.setState({ cards: [...cards], });
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...this.state.cards], });
  };

  render() {
    return (
      <Container>
        <Header as="h1" > React Flash Cards </Header>
        <br />
        <Cards remove={this.removeCard} cards={this.state.cards} />
        <hr />
        <h3> Make a New Card </h3>
        <MakeACard add={this.addCard}/>
      </Container>
    );
  }
}

export default App;
