import { CircleButton, SectionTitle, ContactForm } from '../../components';
import { ReactComponent as QuestElipsWithStar } from '../../assets/img/QuestElipsWithStar.svg'
import questSecImg1 from '../../assets/img/questSecImg1.png';
import questSecImg2 from '../../assets/img/questSecImg2.png';
import questSecImg3 from '../../assets/img/questSecImg3.png';
import styles from './Questionnaire.module.css';

export const Questionnaire = () => {
  return (
    <section className={`${styles.root} container`}>
      <SectionTitle title="Обратная связь" subtitleFirst="Остались" subtitleSecond="вопросы" isMargin={true}/>
      <article className={styles.contentContainer}>
        <aside className={styles.galleryContainer}>
          <figure className={styles.imgContainer}>
            <img className={styles.img} src={questSecImg1} alt=""/>
          </figure>
          <figure className={styles.imgContainer}>
            <img className={styles.img} src={questSecImg2} alt=""/>
          </figure>
          <figure className={styles.imgContainer}>
            <img className={styles.img} src={questSecImg3} alt=""/>
          </figure>
          <aside className={styles.elips}>
            <QuestElipsWithStar/>
          </aside>
        </aside>
        <aside className={styles.formContainer}>
          <h6 className={styles.announcement}>
            Напишите мне и я отвечу на ваши вопросы
          </h6>
          <ContactForm/>
        </aside>
      </article>
    </section>
  )
}
