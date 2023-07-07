import React, { Component } from 'react';
import styles from './style.module.css';
import Image from '../Image';
import { Typography } from '../Typography';

export default class Input extends Component {
  render() {
    const { type, label, placeholder, name } = this.props;
    return (
      <div className={styles.form__group}>
        {type == 'submit' ? (
          <></>
        ) : (
          <label htmlFor={name} className={styles.form__label}>
            <Typography variant={'h6'}>{label}</Typography>
          </label>
        )}
        {type == 'password' ? (
          <div className={styles.form__input__password}>
            <input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
            />
            <Image ImageSrc='/assets/Vector.svg' />
          </div>
        ) : type == 'submit' ? (
          <input
            id={name}
            name={name}
            type={type}
            value={name}
            className={styles.form__submit}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            className={styles.form__input}
            placeholder={placeholder}
          />
        )}
      </div>
    );
  }
}
