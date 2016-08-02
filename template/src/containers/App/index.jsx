import React, { Component } from 'react'
import { Link } from 'react-router'

import logo from '../../assets/logo.png'

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/userList">用页列表页</Link>
        <img src={logo} />
      </div>
    )
  }
}
