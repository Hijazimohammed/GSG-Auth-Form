import React, { Component } from 'react';
import styles from './style.module.css';
import { Typography } from '../../Typography';
import { socialIcons } from '../../../mock/data';
import SocialIcon from '../../SocialIcon';
import Form from '../../Form';
import Input from '../../Input';
import Container from '../../Container';

export default class LeftDiv extends Component {
  render() {
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
          <div className={styles.or__serprate}>
            <span></span>
            <div className={styles.or__text}>Or</div>
            <span></span>
          </div>
          <Form>
            <Input
              name='email'
              type='text'
              label='Your email'
              placeholder='Write your email'
            />
            <Input
              name='password'
              type='password'
              label='Enter your password'
              placeholder='•••••••••'
            />
            <Input name='Login' type='submit' />
          </Form>
          <div className={styles.register}>
            <Typography variant={'h6'}>
              Don’t have an account? <span>Register</span>
            </Typography>
          </div>
        </section>
      </Container>
    );
  }
}
