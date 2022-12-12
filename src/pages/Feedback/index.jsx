import { SectionTitle, CustomButton } from '../../components'
import feedback1 from '../../assets/img/feedback1.jpeg';
import feedback2 from '../../assets/img/feedback2.jpeg';
import feedback3 from '../../assets/img/feedback3.jpeg';
import { ReactComponent as SmallStar } from '../../assets/img/SmallFeetbackStar.svg';
import { ReactComponent as BigStar } from '../../assets/img/BigFeetbackStar.svg';

import styles from './Feedback.module.css';

const imgArr = [
  {
    id: 1,
    src: feedback1,
    alt: "My feetback img",
  },
  {
    id: 2,
    src: feedback2,
    alt: "My feetback img",
  },
  {
    id: 3,
    src: feedback3,
    alt: "My feetback img",
  }
];

export const Feedback = () => {
  return (
    <section className={`${styles.root} container section`}>
      <SectionTitle subtitleFirst={"Как отзываются"} subtitleSecond={"мои клиенты"} title={"Отзывы"} />
      <article className={styles.contentContainer}>
        <figure className={styles.imgContainer}>
          <img className={styles.img} src={feedback1} alt="" />
        </figure>
        <figure className={styles.imgContainer}>
          <img className={styles.img} src={feedback2} alt="" />
        </figure>
        <figure className={styles.imgContainer}>
          <img className={styles.img} src={feedback3} alt="" />
        </figure>
      </article>
      <aside className={styles.buttonContainer}>
        <CustomButton text="Все отзывы" link={"https://www.instagram.com/stories/highlights/17948891671106395/"} style="link"/>
      </aside>
      <aside className={styles.starsContainer}>
        <SmallStar/>
        <BigStar/>
      </aside>
    </section>
  )
}