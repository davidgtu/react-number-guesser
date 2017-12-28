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
    if (this.state.userMax < this.state.userMin) {
      this.setState({
        message: "You can't have the Max bound less than Minimum bound!"
      });
    } else {
      this.updateMinMax();
      this.clearInputFields();
    }
  }

  updateMinMax() {
    this.setState({
      randomNum : this.generateRandomNum(this.state.userMin, this.state.userMax),
      userMin   : '',
      userMax   : '',
      minimum   : this.state.userMin,
      maximum   : this.state.userMax,
    });
  }

  clearInputFields() {
    document.querySelector('.minimum--input').value = "";
    document.querySelector('.maximum--input').value = "";
  }

  disableRangeButton() {
    if (this.state.userMin === '' || this.state.userMax === '') {
      return true;
    } else {
      return false;
    }
  }

  setUserGuessInput(e) {
    this.setState({ guessInput: e.target.value });
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
        randomNum: this.generateRandomNum(this.state.minimum, this.state.maximum),
      });
    } else if (userGuess > randomNum) {
      this.setState({ message: 'Too high. Try Again.' });
    } else {
      this.setState({ message: 'Too low. Try Again.' });
    };
  }

  render() {
    const guessInput = this.state.guessInput === "" ? true :  false;
    return (
      <div className="main--container">
        <div className="game--container">
          <h1 className="min-max--text bottom-gutter">Guess a number between {this.state.minimum} and {this.state.maximum}</h1>

          <input
            type="number"
            className="user-guess--input input bottom-gutter"
            value={this.state.guessInput}
            onChange={this.setUserGuessInput.bind(this)}
            placeholder="Enter Value"
          />

          <div className="buttons--container">
            <button
              id="guessButton"
              className={guessInput ? 'button disabled' : 'button'}
              onClick={this.setUserGuessClick.bind(this)}
              disabled={guessInput}
            >
              Guess
            </button>
          </div>
        </div>

        <div className="results--container">
          <h3 className="bottom-gutter">Your last guess was: {this.state.guess}</h3>
          <h3 className="bottom-gutter">{this.state.message}</h3>
        </div>

        <MinMax
          className="thing"
          userMin={this.state.userMin}
          userMax={this.state.userMax}
          setMinMaxInput={this.setMinMaxInput.bind(this)}
          setMinMaxClick={this.setMinMaxClick.bind(this)}
          disabled={this.disableRangeButton.bind(this)}
        />
      </div>
    )
  }
}

export default Input;
