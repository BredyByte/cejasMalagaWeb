import React from 'react';
import s from './Footer.module.css';
import logo from '../Logo/CM.png';
import logoStar from '../Logo/star.png';

function Footer(props) {
  return (
    <>
      <section className={s.titleUpperMap}>
        <p className={s.title_contakti}>Контакты</p>
        <p className={s.titleCallMe}>Свяжитесь со мной</p>
      </section>

      <section className={s.mapSide}>
        <iframe
          className={s.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.721627108399!2d-4.41653673442847!3d36.72924627938951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7c692acd80b%3A0x760121b3b7423ef0!2z0JrRgNC40YHRgtC-INC00LUg0LvQsCDQrdC_0LjQtNC10LzQuNGPLCDQnNCw0LvQsNCz0LAsINCY0YHQv9Cw0L3QuNGP!5e0!3m2!1sru!2sit!4v1670621048202!5m2!1sru!2sit"></iframe>
        <side className={s.textSide}>
          <p>
            <b>Вы можете связаться со мной </b>
          </p>
          <p>в будние дни с 10:00-20:00</p>
          <div className={s.starLogo}>
            <img className={s.star_image} src={logoStar} alt="star" />
            <li className={s.list}>calle cristo de la epidemia 93</li>
          </div>
          <div className={s.starLogo}>
            <img className={s.star_image} src={logoStar} alt="star" />
            <li className={s.list}>Example@mail.com</li>
          </div>
          <div className={s.starLogo}>
            <img className={s.star_image} src={logoStar} alt="star" />
            <li className={s.list}>Instagram</li>
          </div>
          <div className={s.starLogo}>
            <img className={s.star_image} src={logoStar} alt="star" />
            <li className={s.list}>Whatsapp</li>
          </div>
        </side>
      </section>
      <figure className={s.logo_container}>
        <img className={s.logo} src={logo} alt="LOGO" />
      </figure>
      <section className={s.list_container}>
        <li className={s.list}>Обо мне</li>
        <li className={s.list}>Обучение</li>
        <li className={s.list}>Портфолио</li>
        <li className={s.list}>Услуги</li>
        <li className={s.list}>Обратная связь</li>
        <li className={s.list}>Контакты</li>
      </section>

      <section className={s.bottom_text}>
        <p className={s.politics}>Политика конфиденциальности</p>
        <p className={s.politics}>разработка сайтов</p>
      </section>
    </>
  );
}

export default Footer;
