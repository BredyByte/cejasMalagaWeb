import { SectionTitle, CircleButton } from '../../components'
import styles from './Training.module.css'

import pic1 from '../../assets/img/Training1.jpg';
import pic2 from '../../assets/img/Training2.jpg';
import pic3 from '../../assets/img/Training3.jpg';
import { ReactComponent as Elips1 } from '../../assets/img/TrainingElipsWithStar1.svg';
import { ReactComponent as Elips2 } from '../../assets/img/TrainingElipsWithStar2.svg';
import { ReactComponent as Start } from '../../assets/img/TrainingStar.svg';

export const Training = () => {
  return (
    <section className={`${styles.root} container`}>
      <SectionTitle title="Обучение" subtitleFirst="Представляю вам" subtitleSecond="базовый курс"/>
      <article className={styles.contentContainer}>
        <figure className={styles.imgContainer}>
          <img className={styles.img} src={pic1} alt="" />
        </figure>
        <figure className={styles.imgContainer}>
          <img className={styles.img} src={pic2} alt="" />
        </figure>
        <figure className={styles.imgContainer}>
          <img className={styles.img} src={pic3} alt="" />
        </figure>
      </article>
      <aside className={styles.buttonContainer}>
        <CircleButton className="text" text="Обучаться"/>
      </aside>
      <aside className={styles.starsContainer}>
        {/*<SmallStar/>*/}
        {/*<BigStar/>*/}
      </aside>
    </section>
  )
}
