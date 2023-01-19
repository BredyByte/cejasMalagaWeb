import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import styles from './Footer.module.css';

export const Footer = ({ reference, scrollToRef }) => {
  return (
    <footer className={`${styles.root} container`}>
      <Logo className={styles.logo} />
      <menu className={styles.menu}>
        <li className={styles.menuItem} onClick={() => scrollToRef(reference.about)}><p>Обо мне</p></li>
        <li className={styles.menuItem} onClick={() => scrollToRef(reference.training)}><p>Обучение</p></li>
        <li className={styles.menuItem} onClick={() => scrollToRef(reference.portfolio)}><p>Портфолио</p></li>
        <li className={styles.menuItem} onClick={() => scrollToRef(reference.services)}><p>Услуги</p></li>
        <li className={styles.menuItem} onClick={() => scrollToRef(reference.maps)}><p>Контакты</p></li>
        <li className={styles.menuItem} onClick={() => scrollToRef(reference.questionnaire)}><p>Обратная связь</p></li>
      </menu>
      <ul className={styles.linkList}>
        <h4>Разработка сайтов:</h4>
        <li className={styles.linkItem}>
          <a href="mailto:correodemimobil@gmail.com" target="_blank" rel="noreferrer">correodemimobil@gmail.com</a>
        </li>
        <li className={styles.linkItem}>
          <a href="https://t.me/Davyd_y_punto" target="_blank" rel="noreferrer">Telegram</a>
        </li>
      </ul>
    </footer>
  );
};
