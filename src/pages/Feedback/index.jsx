import { SectionTitle, LinkButton } from '../../components'
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
    <section className={`${styles.root} container`}>
      <SectionTitle subtitleFirst={"Как отзываются"} subtitleSecond={"мои клиенты"} title={"Отзывы"} />
      <article className={styles.contentContainer}>
          {
            imgArr.map(i => (
              <figure className={styles.imgContainer} key={i.id}>
                <img className={styles.img} src={i.src} alt={i.alt} />
              </figure>
            ))
          }
      </article>
      <span className={styles.buttonContainer}>
          <LinkButton text="Все отзывы" className="text" link={"https://www.instagram.com/stories/highlights/17948891671106395/"}/>
        </span>
      <aside className={styles.starsContainer}>
        <SmallStar/>
        <BigStar/>
      </aside>
    </section>
  )
}