import React, { Component } from 'react';
import styles from './style.module.css';
import Container from '../../Container';
import Image from '../../Image';
import { Typography } from '../../Typography';
import Form from '../../Form';
import Input from '../../Input';
import PasswordStrength from '../../PasswordStrength';
import Or from '../../OrSeprator';
import Error from '../../Error';

const errors = {
  email: 'email',
  username: 'username',
  phone: 'phone',
  repeatePassword: 'repeatePassword',
};
export default class LeftDiv extends Component {
  state = {
    email: '',
    username: '',
    phone: '',
    password: '',
    repeatPassword: '',
    passwordStrength: 0,
    isPasswordValid: false,
    isRepeatePasswordValid: false,
    isEmailValid: false,
    isUsernameValid: false,
    isPhoneValid: false,
    conditions: false,
  };

  validEmail = (email) => {
    let valid = String(email)
      .toLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
      ? true
      : false;

    if (valid == false) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isEmailValid: true,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isEmailValid: false,
        };
      });
    }
    return valid;
  };

  validUsername = (username) => {
    let valid = String(username)
      .toLowerCase()
      .match(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g)
      ? true
      : false;
    if (valid == false) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isUsernameValid: true,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isUsernameValid: false,
        };
      });
    }
    return valid;
  };

  validPhone = (phone) => {
    let valid = String(phone).match(
      /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g
    )
      ? true
      : false;
    if (valid == false) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isPhoneValid: true,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isPhoneValid: false,
        };
      });
    }
    return valid;
  };

  validRepetePassword = (rp) => {
    let valid = rp == this.state.password ? true : false;
    if (valid == false) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isRepeatePasswordValid: true,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isRepeatePasswordValid: false,
        };
      });
    }
    return valid;
  };

  checkConditions = (con) => {
    let valid = con == true ? true : false;
    if (valid == false) {
      this.setState((prevState) => {
        return {
          ...prevState,
          conditions: true,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          conditions: false,
        };
      });
    }
    return valid;
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: e.target.value });
    let strength = 0;
    if (name === 'password') {
      if (value.length > 4) {
        strength = strength + 20;
      }
      if (value.length > 10) {
        strength = strength + 20;
      }
      if (value.match(/[a-z]/g)) {
        strength = strength + 20;
      }
      if (value.match(/[A-Z]/g)) {
        strength = strength + 20;
      }
      if (value.match(/[0-9]/g)) {
        strength = strength + 20;
      }
      if (value.match(/[^0-9a-zA-Z\s]/g)) {
        strength = strength + 20;
      }
      this.setState({ passwordStrength: strength });
    }

    if (name == 'conditions') {
      this.setState({ conditions: e.target.checked });
    }
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      this.validEmail(this.state.email) &&
      this.validUsername(this.state.username) &&
      this.validRepetePassword(this.state.repeatPassword) &&
      this.validPhone(this.state.phone) &&
      this.checkConditions(this.state.conditions)
    ) {
      localStorage.setItem('data', JSON.stringify(this.state));
      this.setState({
        email: '',
        username: '',
        phone: '',
        password: '',
        repeatPassword: '',
        passwordStrength: 0,
        isPasswordValid: false,
        isRepeatePasswordValid: false,
        isEmailValid: false,
        isUsernameValid: false,
        isPhoneValid: false,
        conditions: false,
      });
      this.props.registerRedirect();
    } else {
    }
  };

  render() {
    const { registerRedirect } = this.props;
    return (
      <div className={styles.section}>
        <div className={styles.back__btn}>
          <Image ImageSrc={'/assets/arrow_back_ios_24px.svg'} />
          <Typography registerRedirect={registerRedirect} variant={'h6'}>
            Back
          </Typography>
        </div>
        <Container>
          <div className={styles.leftDiv}>
            <div className={styles.leftDiv__text}>
              <Typography variant={'h3'}>
                Register Individual Account!
              </Typography>
              <Typography variant={'h5'}>
                For the purpose of gamers regulation, your details are required.
              </Typography>
            </div>
            <Form onSubmitHandler={this.onSubmitHandler} signUp>
              <Input
                name='email'
                type='email'
                label='Email address*'
                placeholder='Enter email address'
                onChange={this.onChangeHandler}
                value={this.state.email}
              />
              {this.state.isEmailValid && <Error text={errors.email} />}
              <Input
                name='username'
                type='text'
                label='Username*'
                placeholder='Enter username'
                onChange={this.onChangeHandler}
                value={this.state.username}
              />
              {this.state.isUsernameValid && <Error text={errors.username} />}
              <Input
                name='phone'
                type='tel'
                label='Phone number*'
                placeholder='000 000 0000'
                onChange={this.onChangeHandler}
                value={this.state.phone}
              />
              {this.state.isPhoneValid && <Error text={errors.phone} />}
              <Input
                name='password'
                type='password'
                label='Password*'
                placeholder='password'
                onChange={this.onChangeHandler}
                value={this.state.password}
              />
              <PasswordStrength strength={this.state.passwordStrength} />
              <Input
                name='repeatPassword'
                type='password'
                label='Repeate password*'
                placeholder='Repeat password'
                onChange={this.onChangeHandler}
                value={this.state.repeatPassword}
              />
              {this.state.isRepeatePasswordValid && (
                <Error text={errors.repeatePassword} />
              )}

              <div className={styles.conditions__form}>
                <Input
                  name='conditions'
                  type='checkbox'
                  onChange={this.onChangeHandler}
                  value={this.state.conditions}
                />
                <Typography variant='h6'>
                  I agree to terms & conditions
                </Typography>
              </div>
              <Input name='Register Account' type='submit' />
              <Or />
              <Input
                name='Login'
                registerRedirect={registerRedirect}
                type='button'
                nobackground
              />
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}
