import styles from './Footer.module.css';
import logo from '../Logo/CM.png';
import logoStar from '../Logo/star.png';
import { SectionTitle } from '../'
import {ReactComponent as Logo } from '../../assets/img/Logo.svg'
import {ReactComponent as ListStar } from '../../assets/img/ListStar.svg'

export const Footer = (props) => {
  return (
    <>
      <SectionTitle title={"Контакты"} subtitleFirst={"Свяжитесь со мной"}/>
      <section className={styles.mapSide}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.721627108399!2d-4.41653673442847!3d36.72924627938951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7c692acd80b%3A0x760121b3b7423ef0!2z0JrRgNC40YHRgtC-INC00LUg0LvQsCDQrdC_0LjQtNC10LzQuNGPLCDQnNCw0LvQsNCz0LAsINCY0YHQv9Cw0L3QuNGP!5e0!3m2!1sru!2sit!4v1670621048202!5m2!1sru!2sit"></iframe>
        <side className={styles.textSide}>
          <p>
            <b>Вы можете связаться со мной </b>
          </p>
          <p>в будние дни с 10:00-20:00</p>
          <div className={styles.starLogo}>
            <ListStar/>
            <li className={styles.list}>calle cristo de la epidemia 93</li>
          </div>
          <div className={styles.starLogo}>
            <img className={styles.star_image} src={logoStar} alt="star" />
            <li className={styles.list}>Example@mail.com</li>
          </div>
          <div className={styles.starLogo}>
            <img className={styles.star_image} src={logoStar} alt="star" />
            <li className={styles.list}>Instagram</li>
          </div>
          <div className={styles.starLogo}>
            <img className={styles.star_image} src={logoStar} alt="star" />
            <li className={styles.list}>Whatsapp</li>
          </div>
        </side>
      </section>
      <figure className={styles.logo_container}>
        <Logo/>
      </figure>
      <section className={styles.list_container}>
        <li className={styles.list}>Обо мне</li>
        <li className={styles.list}>Обучение</li>
        <li className={styles.list}>Портфолио</li>
        <li className={styles.list}>Услуги</li>
        <li className={styles.list}>Обратная связь</li>
        <li className={styles.list}>Контакты</li>
      </section>

      <section className={styles.bottom_text}>
        <p className={styles.politics}>Политика конфиденциальности</p>
        <p className={styles.politics}>разработка сайтов</p>
      </section>
    </>
  );
};
