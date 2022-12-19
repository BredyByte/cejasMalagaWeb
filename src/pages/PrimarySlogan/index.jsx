import { CustomButton } from '../../components'

import styles from './PrimarySlogan.module.css';
import pic1 from '../../assets/img/PrimarySloganImg.jpg';
import { ReactComponent as ListStart } from '../../assets/img/ListStar.svg';
import { ReactComponent as Ellipse } from '../../assets/img/PrimarySloganEllipse.svg';
import { ReactComponent as EllipseOutside } from '../../assets/img/PrimarySloganOutsideEllipse.svg';

export const PrimarySlogan = () => {
  return (
    <>
      <section className={`${styles.root} container section`}>
        <article className={styles.contentContainer}>
          <aside className={styles.titleContainer}>
            <h1>Тв<span>о</span>я красота в моих руках</h1>
          </aside>
          <aside className={styles.imgContainer}>
            <img src={pic1} alt=""/>
            <Ellipse className={styles.ellipse}/>
          </aside>
          <aside className={styles.infoContainer}>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <ListStart/>
                <span>Провела более 50 обучений</span>
              </li>
              <li className={styles.infoItem}>
                <ListStart/>
                <span>Преподаватель авторского курса</span>
              </li>
            </ul>
          </aside>
          <aside>
            <CustomButton text="Записаться" inStyle="link" link="https://www.instagram.com/cejas_malaga/"/>
          </aside>
        </article>
      </section>
      <EllipseOutside className={styles.outsideEllipse}/>
    </>
  )
}
