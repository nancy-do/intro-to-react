import React, { Component } from "react";

export default class UserList extends Component {
  render() {
    return (
      <ul className="user-list">
        {this.props.users.map(user => (
          <li>
            <img src={user.avatarUrl} />
            {user.name}
          </li>
        ))}
      </ul>
    );
  }
}
