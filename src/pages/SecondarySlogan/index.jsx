import styles from './SecondarySlogan.module.css';
import { ReactComponent as Stars } from '../../assets/svg/StarsSecondarySlogan.svg';
import { ReactComponent as Ellipse } from '../../assets/svg/EllipseSecondarySlogan.svg';
import { motion } from 'framer-motion';
import { headerAnimation, scaleAnimation } from '../../utils/animation'

export const SecondarySlogan = () => {
  return (
    <motion.section
      className={`${styles.root} section`}
      viewport={{once: true}}
      initial="offscreen"
      whileInView="onscreen"
    >
      <Ellipse className={styles.ellipse}/>
      <Stars className={styles.stars}/>
      <motion.h2
        className={styles.titleContainer}
        variants={headerAnimation}
      >
        <aside className={styles.titleItem}>
          <p>Знаю секрет</p>
        </aside>
        <aside className={styles.titleItem}>
          <p>натуральных</p>
        </aside>
        <aside className={styles.titleItem}>
          <p>бровей</p>
          <motion.span
            className={styles.circle}
            variants={scaleAnimation}
            transition={{
              duration: 0.6,
              delay: 0.8,
              type: "spring",
              stiffness: 500
            }}
          ></motion.span>
        </aside>
      </motion.h2>
    </motion.section>
  )
}

