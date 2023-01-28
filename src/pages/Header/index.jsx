import styles from './Header.module.css'
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg'
import { ReactComponent as Map } from '../../assets/svg/mapPointer.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { motion } from 'framer-motion'
import { textFromBottomAppearance, opacityAnimation } from '../../utils/animation'


export const Header = ({reference, scrollToRef}) => {
  return (
    <motion.header
      className={`${styles.root} container section`}
      viewport={{once: true}}
      initial="offscreen"
      whileInView="onscreen"
    >
      <nav className={styles.navigation}>
        <menu className={styles.menu}>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.about)}>
            <motion.p
              variants={textFromBottomAppearance}
              transition={{
                type: "tween",
                duration: 0.2,
                delay: 0
              }}
            >Обо мне</motion.p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.training)}>
            <motion.p
              variants={textFromBottomAppearance}
              transition={{
                type: "tween",
                duration: 0.2,
                delay: 0.2
              }}
            >Обучение</motion.p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.portfolio)}>
            <motion.p
              variants={textFromBottomAppearance}
              transition={{
                type: "tween",
                duration: 0.2,
                delay: 0.4
              }}
            >Портфолио</motion.p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.services)}>
            <motion.p
              variants={textFromBottomAppearance}
              transition={{
                type: "tween",
                duration: 0.2,
                delay: 0.6
              }}
            >Услуги</motion.p>
          </li>
        </menu>
        <motion.span
          variants={opacityAnimation}
        >
          <Logo className={styles.logo}/>
        </motion.span>
        <menu className={styles.menu}>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.maps)}>
            <motion.p
              variants={textFromBottomAppearance}
              transition={{
                type: "tween",
                duration: 0.2,
                delay: 0.8
              }}
            >Контакты</motion.p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.questionnaire)}>
            <motion.p
              variants={textFromBottomAppearance}
              transition={{
                type: "tween",
                duration: 0.2,
                delay: 1
              }}
            >Обратная связь</motion.p>
          </li>
          <li className={`${styles.menuItem} ${styles.mapLink}`}>
            <motion.p
              variants={textFromBottomAppearance}
              transition={{
                type: "tween",
                duration: 0.2,
                delay: 1.2
              }}
            >
              <Map/>
              <a href="https://goo.gl/maps/e6GZSVoznfLFvHn27" target="_blank" rel="noreferrer">Малага</a>
            </motion.p>
          </li>
        </menu>
        <span className={styles.burger} onClick={() => reference.navMenu.current.classList.add('modalNavActive')}>
          <RxHamburgerMenu/>
        </span>
      </nav>
    </motion.header>
  )
}
