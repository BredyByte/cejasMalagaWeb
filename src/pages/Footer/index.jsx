import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import styles from './Footer.module.css';

export const Footer = ({ refs, scrollToref }) => {
  return (
    <footer className={`${styles.root} container`}>
      <button>
        <Logo className={styles.logo} />
      </button>
      <menu className={styles.menu}>
        <li className={styles.menuItem} onClick={() => scrollToref(refs.about)}><p>Обо мне</p></li>
        <li className={styles.menuItem} onClick={() => scrollToref(refs.training)}><p>Обучение</p></li>
        <li className={styles.menuItem} onClick={() => scrollToref(refs.portfolio)}><p>Портфолио</p></li>
        <li className={styles.menuItem} onClick={() => scrollToref(refs.services)}><p>Услуги</p></li>
        <li className={styles.menuItem} onClick={() => scrollToref(refs.maps)}><p>Контакты</p></li>
        <li className={styles.menuItem} onClick={() => scrollToref(refs.questionnaire)}><p>Обратная связь</p></li>
      </menu>
      <ul className={styles.linkList}>
        <h4>Разработчик сайта:</h4>
        <li className={styles.linkItem}>
          <span>David Bredykhin</span>
          <a href="mailto:correodemimobil@gmail.com">correodemimobil@gmail.com</a>
        </li>
      </ul>
    </footer>
  );
};
