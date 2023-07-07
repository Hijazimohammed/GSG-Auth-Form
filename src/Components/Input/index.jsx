import React, { Component } from 'react';
import styles from './style.module.css';
import Image from '../Image';
import { Typography } from '../Typography';

export default class Input extends Component {
  render() {
    const { type, label, placeholder, name, nobackground, loginPage } =
      this.props;
    return (
      <div
        className={
          loginPage ? styles.Wrapped__form__group : styles.form__group
        }>
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
            {placeholder == '•••••••••' && (
              <Image ImageSrc='/assets/Vector.svg' />
            )}
          </div>
        ) : type == 'submit' ? (
          <input
            id={name}
            name={name}
            type={type}
            value={name}
            className={
              nobackground ? styles.no__background : styles.form__submit
            }
          />
        ) : type == 'tel' ? (
          <input
            id={name}
            name={name}
            type={type}
            pattern='[0-9]{3} [0-9]{3}-[0-9]{4}'
            placeholder={placeholder}
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
