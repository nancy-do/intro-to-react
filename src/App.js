import React, { Component } from "react";
import { Greeter } from "./Greeter";
import LoginForm from "./LoginForm";

import "./styles.css";
import UserList from "./UserList";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.getName = this.getName.bind(this);
  }

  //initialising
  componentWillMount() {
    console.log(Object.keys(this.props.client));
    this.props.client.stateChanges.subscribe(x => this.setState({ data: x }));
  }

  getName() {
    this.state.data.chat.users.map(user => {
      alert(user.id);
      if (user.id === this.state.data.chat.currentUserId) {
        this.setState({ name: user.name });
      } else {
        this.setState({ name: "World" });
      }
    });
  }

  //Component lifecycle methods
  render() {
    return (
      <div className="app">
        {/* {JSON.stringify(this.state.data)} */}
        {!this.state.data.chat.isAuthenticated && (
          <LoginForm onLogin={name => this.props.client.tryLogin(name)} />
        )}

        {this.state.data.chat.isAuthenticated && (
          <div className="chat-content">
            {/* {this.getName} */}
            {/* <Greeter name={this.state.name} /> */}
            <UserList users={this.state.data.chat.users} />
            <MessageList messages={this.state.data.chat.messages} />
            <MessageForm
              onSendText={text => this.props.client.sendText(text)}
            />
          </div>
        )}
      </div>
    );
  }
}
