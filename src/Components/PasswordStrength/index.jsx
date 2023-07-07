import React, { Component } from 'react';
import './style.css';

export default class PasswordStrength extends Component {
  render() {
    const { strength } = this.props;
    if (strength >= 100) {
      return (
        <article className='password__strength'>
          <div className='password__strength__meter__very__strong'></div>
          <div className='reasons__very__strong'>Very Strong Password</div>
        </article>
      );
    } else if (strength >= 80) {
      return (
        <article className='password__strength'>
          <div className='password__strength__meter__strong'></div>
          <div className='reasons__strong'>Strong Password</div>
        </article>
      );
    } else if (strength >= 60) {
      return (
        <article className='password__strength'>
          <div className='password__strength__meter__medium'></div>
          <div className='reasons__medium'>Medium Strength Password</div>
        </article>
      );
    } else if (strength >= 40) {
      return (
        <article className='password__strength'>
          <div className='password__strength__meter__low'></div>
          <div className='reasons__low'>Very Weak Password</div>
        </article>
      );
    }
  }
}
