import { SectionTitle } from '../../components';
import { ReactComponent as ListStar } from '../../assets/svg/ListStar.svg';
import styles from './Maps.module.css';
import { personalLinkList } from '../../utils/mapData';


export const Maps = ({reference}) => {
  return (
    <section ref={reference.maps} className={`${styles.root} container section`}>
      <SectionTitle title={'Контакты'} subtitleFirst={'Свяжитесь со мной'} isMargin={true} />
      <section className={styles.contentContainer}>
        <iframe
          title="Google map"
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.58077099092!2d-4.415677!3d36.7326285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7c7d5368fd3%3A0xc25e298f1376fb91!2sC.%20Cristo%20de%20la%20Epidemia%2C%2093%2C%2029013%20M%C3%A1laga!5e0!3m2!1sru!2ses!4v1673285659674!5m2!1sru!2ses"
          onTouchCancelCapture={e => console.log(e)}
        />
        <aside className={styles.infoSide}>
          <h6 className={styles.announcement}>
            Вы можете связаться со мной в будние дни с 10:00-20:00
          </h6>
          <ul className={styles.connectionList}>
            {
              personalLinkList.map(i => (
                <li className={styles.connectionLink}>
                  <ListStar/>
                  <a href={i.link} target="_blank" rel="noreferrer">
                    {i.text}
                  </a>
                </li>
              ))
            }
          </ul>
        </aside>
      </section>
    </section>
  );
};
