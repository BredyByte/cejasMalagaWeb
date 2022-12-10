import styles from './Buttons.module.css';

export const LinkButton = ({text, link}) => {
  return (
    <a className={styles.linkButton} href={link} target="_blank">
      <span>{text}</span>
      <i className="fa-solid fa-arrow-right-long"></i>
    </a>
  );
}

export const CircleButton = ({text}) => {
  return (
    <button className={styles.circleButton}>
      <p>{text}<i className="fa-solid fa-arrow-right-long"></i></p>
      <span className={styles.circle}></span>
    </button>
  );
}

