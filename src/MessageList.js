import React, { Component } from "react";

export default class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map(message => (
          <li>{message.text}</li>
        ))}
      </ul>
    );
  }
}
