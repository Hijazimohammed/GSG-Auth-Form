import React, { Component } from 'react';
import styles from './style.module.css';
import RightDiv from '../../Components/Login/RightDiv';
import LeftDiv from '../../Components/Login/LeftDiv';

export default class Login extends Component {
  render() {
    const { registerRedirect } = this.props;
    return (
      <section className={styles.section}>
        <RightDiv />
        <LeftDiv registerRedirect={registerRedirect} />
      </section>
    );
  }
}
