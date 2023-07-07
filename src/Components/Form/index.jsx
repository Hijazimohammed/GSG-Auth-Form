import React, { Component } from 'react';
import styles from './style.module.css';

export default class Form extends Component {
  render() {
    const { children } = this.props;
    return <form className={styles.form}>{children}</form>;
  }
}
