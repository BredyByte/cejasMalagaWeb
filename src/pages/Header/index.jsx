import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import { ReactComponent as Map } from '../../assets/img/mapPointer.svg';
import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { ModalNav } from '../../components';
import { useNavigate } from 'react-router-dom'


export const Header = ({refs, scrollToref}) => {
  const navigate = useNavigate();
  return (
    <header className={`${styles.root} container section`}>
      <nav className={styles.navigation}>
        <menu className={styles.menu}>
          <li className={styles.menuItem} onClick={() => scrollToref(refs.about)}>
            <p>Обо мне</p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToref(refs.training)}>
            <p>Обучение</p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToref(refs.portfolio)}>
            <p>Портфолио</p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToref(refs.services)}>
            <p>Услуги</p>
          </li>
        </menu>
        <Logo className={styles.logo}/>
        <menu className={styles.menu}>
          <li className={styles.menuItem} onClick={() => scrollToref(refs.maps)}>
            <p>Контакты</p>
          </li>
          <li className={styles.menuItem} onClick={() => scrollToref(refs.questionnaire)}>
            <p>Обратная связь</p>
          </li>
          <li className={`${styles.menuItem} ${styles.mapLink}`}>
            <Map/>
            <a href="https://www.google.com/maps/place/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%BE+%D0%B4%D0%B5+%D0%BB%D0%B0+%D0%AD%D0%BF%D0%B8%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F,+%D0%9C%D0%B0%D0%BB%D0%B0%D0%B3%D0%B0,+%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F/@36.7292463,-4.4165367,17z/data=!3m1!4b1!4m5!3m4!1s0xd72f7c692acd80b:0x760121b3b7423ef0!8m2!3d36.7305945!4d-4.4149938" target= "_blank" rel="noreferrer">Малага</a>
          </li>
          {/*<li className={`${styles.menuItem} ${styles.language}`}>*/}
          {/*  <a href="">Язык</a>*/}
          {/*</li>*/}
        </menu>
        <span className={styles.burger} onClick={() => navigate('/modal')}>
          <RxHamburgerMenu/>
        </span>
      </nav>
    </header>
  )
}
