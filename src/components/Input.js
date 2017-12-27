import React, { Component } from 'react';
import MinMax from './MinMax';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      randomNum   : 0,
      guessInput  : '',
      minimum     : 0,
      maximum     : 10,
      userMin     : '',
      userMax     : '',
      guess       : '',
      message     : '',
    };
  }

  generateRandomNum(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  componentDidMount() {
    this.setState({ randomNum: this.generateRandomNum() });
  }

  setMinMaxInput(e) {
    let { name, value } = e.target;
    this.setState({ [name]: parseInt(value) });
  }

  setMinMaxClick() {
    this.setState({
      randomNum : this.generateRandomNum(this.state.userMin, this.state.userMax),
      userMin   : '',
      userMax   : '',
      minimum   : this.state.userMin,
      maximum   : this.state.userMax,
    });
  }

  setUserGuessInput(e) {
    this.setState({ guessInput: e.target.value })
  }

  setUserGuessClick(e) {
    this.setState({
      guessInput  : '',
      guess       : parseInt(this.state.guessInput),
    });

    this.setMessaging();
  }

  setMessaging() {
    let min = this.state.min;
    let max = this.state.max;
    let userGuess = parseInt(this.state.guessInput);
    let randomNum = this.state.randomNum;

    if (userGuess === randomNum) {
      this.setState({
        message: 'Correct! Play again?',
        randomNum: this.generateRandomNum(),
      });
    } else if (userGuess > randomNum) {
      this.setState({ message: 'Too high. Try Again.' });
    } else {
      this.setState({ message: 'Too low. Try Again.' });
    };
  }

  render() {

    return (
      <div className="container">
        <div className="game--container">
          <MinMax
            className="thing"
            userMin={this.state.userMin}
            userMax={this.state.userMax}
            setMinMaxInput={this.setMinMaxInput.bind(this)}
            setMinMaxClick={this.setMinMaxClick.bind(this)}
          />

          <h3 className="min-max--text">Guess a number between {this.state.minimum} and {this.state.maximum}</h3>

          <input
            type="number"
            className="user-guess--input"
            value={this.state.guessInput}
            onChange={this.setUserGuessInput.bind(this)}
            placeholder="Guess!"
          />

          <div className="buttons--container">
            <button
              id="guessButton"
              onClick={this.setUserGuessClick.bind(this)}
            >
              Guess!
            </button>
          </div>
        </div>

        <div className="results--container">
          <h3>Your last guess was: {this.state.guess}</h3>
          <h4>{this.state.message}</h4>
        </div>
      </div>
    )
  }
}

export default Input;
