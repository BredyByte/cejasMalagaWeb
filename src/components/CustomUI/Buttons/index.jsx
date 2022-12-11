import styles from './Buttons.module.css';
import React from 'react'

export const LinkButton = ({text, link}) => {
  return (
    <a className={styles.linkButton} href={link} target="_blank" rel="noreferrer">
      <span>{text}</span>
      <i className="fa-solid fa-arrow-right-long"></i>
    </a>
  );
}

export const CircleButton = ({text, type}) => {
  return (
    <button className={styles.circleButton} type={type}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.arrow} ${styles.icon}`}></span>
      </span>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}

