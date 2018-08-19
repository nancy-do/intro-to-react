import React, { Component } from "react";

export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //state = {};

  handleSubmit(event) {
    //console.log(Object.keys(this.props));
    this.props.onSendText(this.state.text);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          text="usertext"
          placeholder="Enter message"
          value={this.state.text}
          onInput={event => this.setState({ text: event.currentTarget.value })}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
