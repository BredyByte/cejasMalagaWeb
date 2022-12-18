import { SectionTitle, CustomButton } from '../../components'
import styles from './Portfolio.module.css'

import pic1 from '../../assets/img/Portfolio1.png';
import pic2 from '../../assets/img/Portfolio2.png';
import pic3 from '../../assets/img/Portfolio3.png';
import { ReactComponent as Start } from '../../assets/img/TrainingStar.svg';

export const Portfolio = ({reference}) => {
  return (
    <section ref={reference.portfolio} className={`${styles.root} container section`}>
      <SectionTitle title="Портфолио" subtitleFirst="Со мной ты будешь" subtitleSecond="самой яркой"/>
      <aside className={styles.star}>
        <Start/>
      </aside>
      <article className={styles.contentContainer}>
        <figure className={`${styles.imgContainer} imgContainer`}>
          <img className={styles.img} src={pic1} alt="Profile work img" />
        </figure>
        <figure className={`${styles.imgContainer} imgContainer`}>
          <img className={styles.img} src={pic2} alt="Profile work img" />
        </figure>
        <figure className={`${styles.imgContainer} imgContainer`}>
          <img className={styles.img} src={pic3} alt="Profile work img" />
          <aside className={styles.smallStar}>
            <Start/>
          </aside>
        </figure>
      </article>
      <aside className={styles.buttonContainer}>
        <CustomButton text="Все работы" inStyle="link" link="https://www.instagram.com/cejas_malaga/"/>
      </aside>
    </section>
  )
}
