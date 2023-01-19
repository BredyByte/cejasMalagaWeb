import { SectionTitle, ContactForm } from '../../components';
import { ReactComponent as QuestElipsWithStar } from '../../assets/svg/QuestElipsWithStar.svg'
import questSecImg1 from '../../assets/img/questsecImg1.webp';
import questSecImg2 from '../../assets/img/questsecImg2.webp';
import questSecImg3 from '../../assets/img/questsecImg3.webp';
import styles from './Questionnaire.module.css';
import Fancybox from '../../utils/fancybox';

export const Questionnaire = ({reference}) => {
  return (
    <section ref={reference.questionnaire} className={`${styles.root} container section`}>
      <Fancybox>
        <SectionTitle title="Обратная связь" subtitleFirst="Остались" subtitleSecond="вопросы" isMargin={true}/>
        <article className={styles.contentContainer}>
          <aside className={styles.galleryContainer}>
            <a className={`${styles.imgContainer} imgContainer`} href={questSecImg1} data-fancybox="questionnaire">
              <img className={styles.img} src={questSecImg1} alt=""/>
            </a>
            <a className={`${styles.imgContainer} imgContainer`} href={questSecImg2} data-fancybox="questionnaire">
              <img className={styles.img} src={questSecImg2} alt=""/>
            </a>
            <a className={`${styles.imgContainer} imgContainer`} href={questSecImg3} data-fancybox="questionnaire">
              <img className={styles.img} src={questSecImg3} alt=""/>
            </a>
            <aside className={styles.ellipse}>
              <QuestElipsWithStar/>
            </aside>
          </aside>
          <aside className={styles.formContainer}>
            <h6 className={styles.announcement}>
              Напишите мне и я отвечу на ваши вопросы
            </h6>
            <ContactForm reference={reference}/>
          </aside>
        </article>
      </Fancybox>
    </section>
  )
}
