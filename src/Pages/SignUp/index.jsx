import React, { Component } from 'react';
import styles from './style.module.css';
import RightDiv from '../../Components/SignUp/RightDiv';
import LeftDiv from '../../Components/SignUp/LeftDiv';

export default class SignUp extends Component {
  render() {
    return (
      <section className={styles.section}>
        <RightDiv />
        <LeftDiv />
      </section>
    );
  }
}
