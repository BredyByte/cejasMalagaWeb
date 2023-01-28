import styles from './Buttons.module.css';
import { motion } from 'framer-motion';
import { opacityAnimation } from '../../../utils/animation'


export const CustomButton = ({type, text, link, inStyle, func}) => {
  if (inStyle === 'btn') {
    return (
      <motion.button
        className={`${styles.button} ${styles.buttonBtn}`} type={type} onClick={func}
        viewport={{once: true}}
        initial="offscreen"
        whileInView="onscreen"
        variants={opacityAnimation}
      >
        <span>{text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </motion.button>
    )
  } else if (inStyle === 'link') {
    return (
      <motion.a
        className={`${styles.button} ${styles.buttonLink}`}
        href={link}
        target="_blank"
        rel="noreferrer"
        viewport={{once: true}}
        initial="offscreen"
        whileInView="onscreen"
        variants={opacityAnimation}
      >
        <span>{text}</span>
        <motion.svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </motion.svg>
      </motion.a>
    )
  } else if (inStyle === 'btnReverse') {
    return (
      <motion.button
        className={styles.buttonReverse}
        onClick={func}
        viewport={{once: true}}
        initial="offscreen"
        whileInView="onscreen"
        variants={opacityAnimation}
      >
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <polyline points="8 1 12 5 8 9"></polyline>
          <path d="M1,5 L11,5"></path>
        </svg>
        <span>{text}</span>
      </motion.button>
      )
  }
  return (
    <button>
      {text}
    </button>
  )

}

