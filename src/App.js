import React, { Component, Fragment } from "react";
import { Greeter } from "./Greeter";

import "./styles.css";

class App extends Component {
  state = { rank: "highness" };

  render() {
    return (
      <div className="app">
        <Greeter name="Nancy" />
      </div>
    );
  }
}

export default App;
