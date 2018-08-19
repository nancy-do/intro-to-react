import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //state = {};

  handleSubmit(event) {
    //console.log(Object.keys(this.props));
    this.props.onLogin(this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {/* {JSON.stringify(Object.keys(this.props))} */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter user name"
            value={this.state.name}
            onInput={event =>
              this.setState({ name: event.currentTarget.value })
            }
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
