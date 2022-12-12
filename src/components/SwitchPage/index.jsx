import style from '../../pages/Services/Service.module.css';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
export const switchPage = [
  {
    id: 1,
    Uslugi: 'Услуги',
  },

  {
    id: 2,
    Learn: 'Обучение',
  },
];

export const Caption = () => {
  return (
    <header>
      <section className={style.logoContainer}>
        <Logo className={style.Logo} />
      </section>
      <section className={style.buttonContainer}>
        <button className={style.textBack}>Назад</button>
      </section>
      <section className={style.titleContainer}>
        <h1 className={style.title}>{switchPage[0].Uslugi}</h1>
      </section>
      <section className={style.textListContainer}>
        <button className={style.textList}>Перманентный макияж губ</button>
      </section>
    </header>
  );
};

export const SecondCaption = () => {
  return (
    <header>
      <section className={style.logoContainer}>
        <Logo className={style.Logo} />
      </section>
      <section className={style.buttonContainer}>
        <button className={style.textBack}>Назад</button>
      </section>
      <section className={style.titleContainer}>
        <h1 className={style.title}>{switchPage[1].Learn}</h1>
      </section>
      <section className={style.textListContainer}>
        <button className={style.textList}>Перманентный макияж губ</button>
      </section>
    </header>
  );
};
