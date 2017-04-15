import React from 'react';
import {userData} from './userData';

class PostRegistration extends React.Component {

  constructor(props) {
    super(props);
    console.log(userData.email)
    this.state = {};
  };

  render() {
    return (
      <div>
        <h1>Post Registration</h1>
        <span>Thanks {userData.name}! Check your email, {userData.email} to confirm your account and login!
        </span>
      </div>
    );
  }
}

export default PostRegistration;