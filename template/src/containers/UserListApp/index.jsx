import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../../actions/user'
import { UserList } from '../../components'

const mapStateToProps = state => ({
    users: state.user.users,
    usersById: state.user.usersById
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userAction, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export default class UserListApp extends Component {
    render() {
        const { usersById, actions, dispatch } = this.props

        return (
            <div>
                <h1>用户列表</h1>
                <UserList users={usersById} actions={actions} />
            </div>
        )
    }
}

UserListApp.propTypes = {
    users: PropTypes.array,
    usersById: PropTypes.object,
    dispatch: PropTypes.func
}
