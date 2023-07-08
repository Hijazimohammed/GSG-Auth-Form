import React, { Component } from 'react';
import styles from './style.module.css';

export default class Form extends Component {
  render() {
    const { children, onSubmitHandler, signUp, onSubmitLoginHandler } =
      this.props;
    return (
      <form
        className={styles.form}
        onSubmit={signUp ? onSubmitHandler : onSubmitLoginHandler}>
        {children}
      </form>
    );
  }
}
