import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <li>
        <div>
          <p>{this.props.name}</p>
        </div>
        <button onClick={() => this.props.del(this.props.id) }>删除</button>
      </li>
    );
  }
}
