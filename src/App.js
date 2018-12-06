import React, { Component } from 'react';

export default class App extends Component {
  state = {
    counter: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleIncrement}>
          Increase
        </button>
        <div>{this.state.counter}</div>
      </>
    );
  }
}
