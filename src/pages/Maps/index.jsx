import { SectionTitle } from '../../components';
import { ReactComponent as ListStar } from '../../assets/img/ListStar.svg';
import styles from './maps.module.css';

const sideList = [
  {
    id: 1,
    text: 'calle cristo de la epidemia 93',
    link: 'https://www.google.com/maps/place/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%BE+%D0%B4%D0%B5+%D0%BB%D0%B0+%D0%AD%D0%BF%D0%B8%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F,+%D0%9C%D0%B0%D0%BB%D0%B0%D0%B3%D0%B0,+%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F/@36.7292463,-4.4165367,17z/data=!3m1!4b1!4m5!3m4!1s0xd72f7c692acd80b:0x760121b3b7423ef0!8m2!3d36.7305945!4d-4.4149938',
  },

  {
    id: 2,
    text: 'Example@mail.com',
    link: 'link here',
  },

  {
    id: 3,
    text: 'Instagram',
    link: 'link here',
  },

  {
    id: 4,
    text: 'Whatsapp',
    link: 'link here',
  },
];

export const Maps = () => {
  return (
    <main>
      <SectionTitle title={'Контакты'} subtitleFirst={'Свяжитесь со мной'} />
      <section className={styles.mapSide}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.721627108399!2d-4.41653673442847!3d36.72924627938951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7c692acd80b%3A0x760121b3b7423ef0!2z0JrRgNC40YHRgtC-INC00LUg0LvQsCDQrdC_0LjQtNC10LzQuNGPLCDQnNCw0LvQsNCz0LAsINCY0YHQv9Cw0L3QuNGP!5e0!3m2!1sru!2sit!4v1670621048202!5m2!1sru!2sit"></iframe>

        <section className={styles.textSide}>
          <p>
            <b>Вы можете связаться со мной </b>
          </p>
          <p>в будние дни с 10:00-20:00</p>
          <div>
            {sideList.map((i) => (
              <div className={styles.starLogo} key={i.id}>
                <ListStar />
                <a href={i.link} className={styles.list}>
                  {' '}
                  {i.text}
                </a>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};
