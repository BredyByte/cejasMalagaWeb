import styles from './SectionsTitle.module.css';
import { textFromTopAppearance } from '../../utils/animation';
import { motion } from 'framer-motion';

export const SectionTitle = ({subtitleFirst, subtitleSecond, title, isMargin, isPadding = true, isBold}) => {
  return (
    <motion.div
      className={`${styles.root} ${isMargin ? styles.marginLeft70: ''}` }
      viewport={{once: true}}
      initial="offscreen"
      whileInView="onscreen"
    >
      <motion.div
        className={styles.borderLine}
        variants={{
          offscreen: {
            height: 0
          },
          onscreen: {
            height: "100%",
          }
        }}
        transition={{
          delay: 0.6,
          duration: 0.6,
          type: "tween",
        }}
      ></motion.div>
      <h2 className={styles.title}>
        <motion.div
          variants={textFromTopAppearance(0)}
        >{title}</motion.div>
      </h2>
      <div className={styles.subtitleContainer}>
        <h3 className={styles.subtitle}>
          <div className={styles.subtitleLineContainer}>
            <motion.div
              variants={textFromTopAppearance(0.2)}
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
              variants={textFromTopAppearance(0.4)}
            >
              {subtitleSecond}
            </motion.div>
          </div>
        </h3>
      </div>
    </motion.div>
  )
}
