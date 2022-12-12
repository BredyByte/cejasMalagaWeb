import style from './Section.module.css';

export const Layers = () => {
  return (
    <main>
      <section className={style.textListContainer}>
        <button className={style.textList}>Перманентный макияж губ</button>
      </section>
      <section className={style.textListContainer}>
        <button className={style.textList}>Ламинирование ресниц</button>
      </section>
      <section className={style.textListContainer}>
        <button className={style.textList}>Дизайн бровей</button>
      </section>
      <section className={style.textListContainer}>
        <button className={style.textList}>Перманентный макияж губ</button>
      </section>
      <section className={style.textListContainer}>
        <button className={style.textList}>Ламинирование бровей+окрашивание</button>
      </section>
    </main>
  );
};
