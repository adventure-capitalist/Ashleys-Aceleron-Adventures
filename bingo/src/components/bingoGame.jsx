import React, { Component } from 'react';
import BingoBoard from './bingoBoard'
import {shuffleBoard, checkBoard} from './utils'

 
class BingoGame extends Component {
  constructor (props) {
    super(props);
    
    const squares = Array(25).fill(false);
    squares[12] = true;
    
    this.state = {
        selectedSquares: squares,
        squareValues: [
          "Donate left kidney to a stranger 🎁",
          "Propose to a boyfriend in the Shard \n (and get dumped) 👰🏻‍♂️",
          'Leave home at 16 and never look back 🏃‍♀️',
          "Lerne Deutsch 🇩🇪",
          "Aprender Español 🇪🇸",
          "学中文 🇨🇳",
          "Do a BA in International Economics 💱",
          "Skip the 8th grade 📚",
          "Skip the second year of Uni (because it's cheaper) 🎓",
          "Intern for the German Parliament, do not get paid 🏛",
          "Write off four complete Lemons, yet never crash. 🚙",
          "Discover you can lick your elbow 💪",
          "Go travelling but inside a suitcase (because it's cheaper) 🧳",
          'Take two years of London night classes in coding 👩🏼‍💻',
          "Change jobs four times during coronavirus ♻️",
          "Keep the same potted Christmas tree alive for five years 🎄",
          "Sleep outside in a car in Croydon (and live) 🚗 ",
          "Move to the UK but do it on a FlixBus 🚍",
          "Do an MA in Translation 🗣️",
          'Pay £12,000 to the UK Home Office to hopefully one day become British 💸',
          "Collect three different driving licenses like Pokémon cards 🆔",
          'Discover you are deathly allergic to seafood 🍤',
          "Develop an unhealthy coffee dependency ☕️",
          'Commute to first adult job daily on the National Express 🚌',
          "Learn to play mom's flute, but then switch to trumpet because it's louder in marching band. 🎺"
        ].slice(),
    }
  }
     
      handleClick(i) {
        if(i == 12 || checkBoard(this.state.selectedSquares))
          return;
        
        const squares = this.state.selectedSquares.slice();
        squares[i] = !squares[i];
        
        this.setState({
          selectedSquares: squares
        })
      }
    
    handleReset() {
      const squares = Array(25).fill(false);
      squares[12] = true;
      
      this.setState({
        selectedSquares: squares
      });
    }
    
    handleReRoll() {
      this.setState({
        squareValues: shuffleBoard(this.state.squareValues.slice())
      });
      
      this.handleReset();
    }
    

    
    render() {
      this.state.squareValues[12] = 'FREE';
      const winner = checkBoard(this.state.selectedSquares);
      return (
        <div>
          <h1>{winner ? "Winner, winner chicken dinner 🍗" : "Ashley's connect 5"}</h1>
          <BingoBoard
            squareValues={this.state.squareValues.slice()}
            selectedSquares={this.state.selectedSquares.slice()}
            isWinner={winner}
            onClick={(i) => this.handleClick(i)}
            />
          <button onClick={() => this.handleReRoll()}>Shuffle</button>
          {' '}
          <button onClick={() => this.handleReset()}>Reset</button>
        </div>
      )
    }  
  }
  export default BingoGame
  
  
  
 
 
  
  
  
