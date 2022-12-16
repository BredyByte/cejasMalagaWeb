import { SectionTitle, CustomButton } from '../../components'
import styles from './Training.module.css'

import pic1 from '../../assets/img/Training1.jpg';
import pic2 from '../../assets/img/Training2.jpg';
import pic3 from '../../assets/img/Training3.jpg';
import { ReactComponent as Ellipse1 } from '../../assets/img/TrainingElipsWithStar1.svg';
import { ReactComponent as Start } from '../../assets/img/TrainingStar.svg';

export const Training = ({referens}) => {
  return (
    <section ref={referens.training} className={`${styles.root} container section`}>
      <SectionTitle title="Обучение" subtitleFirst="Представляю вам" subtitleSecond="базовый курс"/>
      <article className={styles.contentContainer}>
        <figure className={`${styles.imgContainer} imgContainer`}>
          <img className={styles.img} src={pic1} alt="" />
          <aside className={styles.ellipse}>
            <Ellipse1/>
          </aside>
        </figure>
        <figure className={`${styles.imgContainer} imgContainer`}>
          <img className={styles.img} src={pic2} alt="" />
        </figure>
        <figure className={`${styles.imgContainer} imgContainer`}>
          <img className={styles.img} src={pic3} alt="" />
        </figure>
        <aside className={styles.addition}>
          <Start/>
          <Start/>
        </aside>
      </article>
      <aside className={styles.buttonContainer}>
        <CustomButton text="Обучаться" inStyle="link"/>
      </aside>
    </section>
  )
}
