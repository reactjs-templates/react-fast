import './userList.css'

import React, { Component, PropTypes } from 'react';
import User from '../User';
import _ from 'lodash';

export default class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {_.map(this.props.users, (user) => {
            return (<User
              key={user.id}
              id={user.id}
              name={user.name}
              {...this.props.actions} />)
          }) }
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
