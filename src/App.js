import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

import React, { Component } from 'react';

export default class App extends Component {
  state = { register: false };
  registerRedirect = () => {
    this.setState((prevState) => ({
      register: !prevState.register,
    }));
  };
  render() {
    const { register } = this.state;
    return (
      <>
        {register ? (
          <SignUp registerRedirect={this.registerRedirect} />
        ) : (
          <Login registerRedirect={this.registerRedirect} />
        )}
      </>
    );
  }
}
