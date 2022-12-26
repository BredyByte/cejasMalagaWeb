import { SectionTitle, CustomButton } from '../../components'
import styles from './Training.module.css'

import { img2, img1, img3 } from '../../assets/img/trainingPageExports';
import { ReactComponent as Ellipse1 } from '../../assets/img/TrainingElipsWithStar1.svg';
import { ReactComponent as Start } from '../../assets/img/TrainingStar.svg';
import { useNavigate } from 'react-router-dom'

export const Training = ({reference}) => {
  const navigate = useNavigate()
  const onClickNavigate = () => {
    navigate('/training')
  }
  return (
    <section ref={reference.training} className={`${styles.root} container section`}>
      <SectionTitle title="Обучение" subtitleFirst="Представляю вам" subtitleSecond="базовый курс"/>
      <article className={styles.contentContainer}>
        <figure className={`${styles.imgContainer} imgContainer`}>
          <img className={styles.img} src={img1} alt="" />
          <aside className={styles.ellipse}>
            <Ellipse1/>
          </aside>
        </figure>
        <figure className={`${styles.imgContainer} imgContainer`}>
          <img className={styles.img} src={img2} alt="" />
        </figure>
        <figure className={`${styles.imgContainer} imgContainer`}>
          <img className={styles.img} src={img3} alt="" />
        </figure>
        <aside className={styles.addition}>
          <Start/>
          <Start/>
        </aside>
      </article>
      <aside className={styles.buttonContainer}>
        <CustomButton text="Обучаться" inStyle="btn" func={onClickNavigate}/>
      </aside>
    </section>
  )
}
