import React from 'react';
import styles from './style.module.css';

export const Typography = ({ children, variant, registerRedirect }) => {
  switch (variant) {
    case 'h1':
      return <h1 className={styles.t__h1}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.t__h2}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.t__h3}>{children}</h3>;
    case 'h4':
      return <h4 className={styles.t__h4}>{children}</h4>;
    case 'h5':
      return <h5 className={styles.t__h5}>{children}</h5>;
    case 'h6':
      return (
        <h6
          onClick={registerRedirect ? registerRedirect : () => {}}
          className={styles.t__h6}>
          {children}
        </h6>
      );
    case 'body1':
      return <p className={styles.t__body1}>{children} </p>;
    case 'body2':
      return <p className={styles.t__body2}>{children} </p>;
    case 'span':
      return <span className={styles.t__span}>{children} </span>;
    case 'caption':
      return <span className={styles.t__caption}>{children} </span>;
    default:
      break;
  }
};
