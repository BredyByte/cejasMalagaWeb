import styles from './Buttons.module.css'

export const CustomButton = ({type, text, link, inStyle, func}) => {
  if (inStyle === 'btn') {
    return (
      <button className={`${styles.button} ${styles.buttonBtn}`} type={type} onClick={func}>
        <span>{text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    )
  } else if (inStyle === 'link') {
    return (
      <a href={link} className={`${styles.button} ${styles.buttonLink}`} target="_blank" rel="noreferrer">
        <span>{text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
    )
  } else if (inStyle === 'btnReverse') {
    return (
      <button className={styles.buttonReverse} onClick={func}>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <polyline points="8 1 12 5 8 9"></polyline>
          <path d="M1,5 L11,5"></path>
        </svg>
        <span>{text}</span>
      </button>
      )
  }
  return (
    <button>
      {text}
    </button>
  )

}

