import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { ReactComponent as Map } from '../../assets/svg/mapPointer.svg';
import { RxHamburgerMenu } from 'react-icons/rx';


export const Header = ({reference, scrollToRef}) => {
  return (
    <header className={`${styles.root} container section`}>
      <nav className={styles.navigation}>
        <menu className={styles.menu}>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.about)}>
            <p>Обо мне</p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.training)}>
            <p>Обучение</p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.portfolio)}>
            <p>Портфолио</p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.services)}>
            <p>Услуги</p>
          </li>
        </menu>
        <Logo className={styles.logo}/>
        <menu className={styles.menu}>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.maps)}>
            <p>Контакты</p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToRef(reference.questionnaire)}>
            <p>Обратная связь</p>
          </li>
          <li className={`${styles.menuItem} ${styles.mapLink}`}>
            <Map/>
            <a href="https://goo.gl/maps/e6GZSVoznfLFvHn27" target= "_blank" rel="noreferrer">Малага</a>
          </li>
        </menu>
        <span className={styles.burger} onClick={() => reference.navMenu.current.classList.add("modalNavActive")}>
          <RxHamburgerMenu/>
        </span>
      </nav>
    </header>
  )
}
