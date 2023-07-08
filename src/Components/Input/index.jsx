import React, { Component } from 'react';
import styles from './style.module.css';
import Image from '../Image';
import { Typography } from '../Typography';

export default class Input extends Component {
  render() {
    const {
      type,
      label,
      placeholder,
      name,
      nobackground,
      loginPage,
      showPassword,
      handleShowPassword,
      onChange,
      registerRedirect,
      value,
    } = this.props;

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
              value={value}
              id={name}
              name={name}
              type={showPassword ? 'text' : 'password'}
              placeholder={placeholder}
              onChange={onChange}
            />
            {placeholder == '•••••••••' &&
              (showPassword ? (
                <svg
                  onClick={handleShowPassword}
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  height='2rem'
                  width='2rem'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z'></path>
                </svg>
              ) : (
                <Image
                  handleShowPassword={handleShowPassword}
                  ImageSrc='/assets/Vector.svg'
                />
              ))}
          </div>
        ) : type == 'submit' ? (
          <input
            onChange={onChange}
            id={name}
            name={name}
            type={type}
            value={name}
            className={
              nobackground ? styles.no__background : styles.form__submit
            }
          />
        ) : type == 'button' ? (
          <input
            onChange={onChange}
            id={name}
            name={name}
            type={type}
            value={name}
            className={styles.no__background}
            onClick={registerRedirect}
          />
        ) : type == 'tel' ? (
          <input
            value={value}
            onChange={onChange}
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
          />
        ) : (
          <input
            value={value}
            onChange={onChange}
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
