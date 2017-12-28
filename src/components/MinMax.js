import React, { Component } from 'react';

class MinMax extends Component {
  constructor(props) {
    super();
    this.state = {
      active: false,
    }
  }

  setMenuState() {
    if (this.state.active) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  }

  render() {
    const active = this.state.active;
    const disabled = this.props.disabled();

    return (
      <div>
        <div className="game-config--title">
          <button className="button bottom-gutter" onClick={this.setMenuState.bind(this)}>Game Config</button>
        </div>

        <div className={active ? '' : 'invisible'}>
          <input
            className="minimum--input input"
            type="number"
            placeholder="min"
            name="userMin"
            onChange={this.props.setMinMaxInput}
          />

          <input
            className="maximum--input input"
            type="number"
            placeholder="max"
            name="userMax"
            onChange={this.props.setMinMaxInput}
          />

          <button
            className={disabled ? 'min-max--button button disabled' : 'min-max--button button'}
            onClick={this.props.setMinMaxClick}
            disabled={disabled}
            >
              Submit
          </button>
        </div>
      </div>
    )
  }
};

export default MinMax;
