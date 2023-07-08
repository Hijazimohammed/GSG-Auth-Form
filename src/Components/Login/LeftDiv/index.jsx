import React, { Component } from 'react';
import styles from './style.module.css';
import { Typography } from '../../Typography';
import { socialIcons } from '../../../mock/data';
import SocialIcon from '../../SocialIcon';
import Form from '../../Form';
import Input from '../../Input';
import Container from '../../Container';
import Or from '../../OrSeprator';
import Success from '../../Success';
import Error from '../../Error';

const data = JSON.parse(localStorage.getItem('data'));
export default class LeftDiv extends Component {
  state = {
    showPassword: false,
    register: false,
    email: '',
    password: '',
    login: '',
  };

  handleShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  onSubmitLoginHandler = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email == data.email && password == data.password) {
      this.setState({ login: true });
      this.setState({ email: '', password: '' });
    } else {
      this.setState({ login: false });
      alert('Something went wrong try again');
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { registerRedirect } = this.props;
    return (
      <Container>
        <section className={styles.left__div}>
          <div className={styles.left__div__text}>
            <Typography variant={'h2'}>Join the game!</Typography>
            <Typography variant={'h5'}>
              Go inside the best gamers social network!
            </Typography>
          </div>
          <div className={styles.social__icons}>
            {socialIcons.map(({ icon }) => (
              <SocialIcon key={icon} icon={icon} />
            ))}
          </div>
          <Or />
          <Form onSubmitLoginHandler={this.onSubmitLoginHandler}>
            <Input
              value={this.state.email}
              name='email'
              type='email'
              label='Your email'
              placeholder='Write your email'
              loginPage
              onChange={this.onChange}
            />
            <Input
              value={this.state.password}
              name='password'
              type='password'
              label='Enter your password'
              placeholder='•••••••••'
              loginPage
              showPassword={this.state.showPassword}
              handleShowPassword={this.handleShowPassword}
              onChange={this.onChange}
            />
            {this.state.login && <Success />}

            <Input name='Login' type='submit' loginPage />
          </Form>
          <div className={styles.register}>
            <Typography variant={'h6'}>
              Don’t have an account?{' '}
              <span onClick={registerRedirect}>Register</span>
            </Typography>
          </div>
        </section>
      </Container>
    );
  }
}
