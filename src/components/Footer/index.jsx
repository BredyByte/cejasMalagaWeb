import styles from './Footer.module.css';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';

export const Footer = () => {
  return (
    <footer className={`${styles.root} container`}>
      <figure className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </figure>
      <menu className={styles.listContainer}>
        <button className={styles.list}>Обо мне</button>
        <button className={styles.list}>Обучение</button>
        <button className={styles.list}>Портфолио</button>
        <button className={styles.list}>Услуги</button>
        <button className={styles.list}>Обратная связь</button>
        <button className={styles.list}>Контакты</button>
      </menu>
      <section className={styles.bottomText}>
        <p>
          <a href="#">Политика конфиденциальности </a>
        </p>
        <p>
          <a href="#">разработка сайтов</a>
        </p>
      </section>
    </footer>
  );
};
