import React, { Component } from 'react';
import './style.css';

export default class PasswordStrength extends Component {
  render() {
    const { strength } = this.props;

    return (
      <article className='password__strength'>
        <div
          className={
            strength >= 100
              ? 'password__strength__meter__very__strong'
              : strength >= 80
              ? 'password__strength__meter__strong'
              : strength >= 60
              ? 'password__strength__meter__medium'
              : strength >= 40
              ? 'password__strength__meter__low'
              : ''
          }></div>
        <div
          className={
            strength >= 100
              ? 'reasons__very__strong'
              : strength >= 80
              ? 'reasons__strong'
              : strength >= 60
              ? 'reasons__medium'
              : strength >= 40
              ? 'reasons__low'
              : ''
          }>
          {strength >= 100
            ? 'Very Strong Password'
            : strength >= 80
            ? 'Strong Password'
            : strength >= 60
            ? 'Medium Strength Password'
            : strength >= 40
            ? 'Very Weak Password'
            : ''}
        </div>
      </article>
    );
  }
}
