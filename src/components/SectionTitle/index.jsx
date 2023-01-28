import styles from './SectionsTitle.module.css';
import { textFromBottomAppearance, textFromTopAppearance } from '../../utils/animation';
import { motion } from 'framer-motion';

export const SectionTitle = ({subtitleFirst, subtitleSecond, title, isMargin, isPadding = true, isBold}) => {
  return (
    <motion.div
      className={`${styles.root} ${isMargin ? styles.marginLeft70: ''}` }
      viewport={{once: true}}
      initial="offscreen"
      whileInView="onscreen"
    >
      <h2 className={styles.title}>
        <motion.div
          variants={textFromTopAppearance}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >{title}</motion.div>
      </h2>
      <div className={styles.subtitleContainer}>
        <h3 className={styles.subtitle}>
          <div className={styles.subtitleLineContainer}>
            <motion.div
              variants={textFromTopAppearance}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
              }}
            >
              {subtitleFirst}
            </motion.div>
          </div>
          <div
            className={`
            ${`${styles.second} ${styles.subtitleLineContainer}`} 
            ${isPadding && styles.paddingLeft} 
            ${isBold && styles.fontBold}`}
          >
            <motion.div
              variants={textFromTopAppearance}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.4,
              }}
            >
              {subtitleSecond}
            </motion.div>
          </div>
        </h3>
      </div>
    </motion.div>
  )
}
