import React, { Component, Fragment } from "react";

import "./styles.css";

class App extends Component {
  state = { rank: "highness" };

  render() {
    return (
      <div className="app">
        <h1>Your {this.state.rank}!</h1>
      </div>
    );
  }
}

export default App;
