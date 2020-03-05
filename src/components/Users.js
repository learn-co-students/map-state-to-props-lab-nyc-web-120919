import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}<br />
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const msp = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(msp)(Users);
