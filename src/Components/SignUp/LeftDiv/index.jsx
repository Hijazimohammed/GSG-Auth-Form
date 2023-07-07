import React, { Component } from 'react';
import styles from './style.module.css';
import Container from '../../Container';
import Image from '../../Image';
import { Typography } from '../../Typography';
import Form from '../../Form';
import Input from '../../Input';
import PasswordStrength from '../../PasswordStrength';
import Or from '../../OrSeprator';
export default class LeftDiv extends Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.back__btn}>
          <Image ImageSrc={'/assets/arrow_back_ios_24px.svg'} />
          <Typography variant={'h6'}>Back</Typography>
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
            <Form>
              <Input
                name='email'
                type='email'
                label='Email address*'
                placeholder='Enter email address'
              />
              <Input
                name='usename'
                type='text'
                label='Username*'
                placeholder='Enter username'
              />
              <Input
                name='phone'
                type='tel'
                label='Phone number*'
                placeholder='000 000 0000'
              />

              <Input
                name='password'
                type='password'
                label='Password*'
                placeholder='password'
              />
              <PasswordStrength strength={40} />
              <Input
                name='repeatPassword'
                type='password'
                label='Repeate password*'
                placeholder='Repeat password'
              />

              <div className={styles.conditions__form}>
                <Input name='conditions' type='checkbox' />
                <Typography variant='h6'>
                  I agree to terms & conditions
                </Typography>
              </div>
              <Input name='Register Account' type='submit' />
              <Or />
              <Input name='Login' type='submit' nobackground />
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}
