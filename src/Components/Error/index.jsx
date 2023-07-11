import React, { Component } from 'react';
import './style.css';

const errors = {
  email: 'Invalid Email Format',
  username: 'Invalid Username Format',
  phone: 'Invalid Phine Numer Format',
  repeatePassword: 'Match Password ',
  password: 'Invalid Password Format',
  terms: 'Can you agreed terms & conditions ',
};
export default class Error extends Component {
  render() {
    const { text } = this.props;
    return (
      <span className='error'>
        {text == 'email' && errors.email}
        {text == 'username' && errors.username}
        {text == 'phone' && errors.phone}
        {text == 'repeatePassword' && errors.repeatePassword}
        {text == 'password' && errors.password}
        {text == 'terms' && errors.terms}
        {text == 'Something went wrong try again' &&
          'Something went wrong try again'}
      </span>
    );
  }
}
