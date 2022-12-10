import React from 'react';
import s from './Footer.module.css';
import logo from '../Logo/CM.png';

function Footer(props) {
  return (
    <>
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
