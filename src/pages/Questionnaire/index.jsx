import { SectionTitle, ContactForm } from '../../components'
import { ReactComponent as QuestElipsWithStar } from '../../assets/svg/QuestElipsWithStar.svg'

import questSecImg1 from '../../assets/img/questsecImg1.webp'
import questSecImg2 from '../../assets/img/questsecImg2.webp'
import questSecImg3 from '../../assets/img/questsecImg3.webp'
import styles from './Questionnaire.module.css'
import Fancybox from '../../utils/fancybox'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../../utils/animation'

export const Questionnaire = ({reference}) => {
  return (
    <section ref={reference.questionnaire} className={`${styles.root} container section`}>
      <Fancybox>
        <SectionTitle title="Обратная связь" subtitleFirst="Остались" subtitleSecond="вопросы" isMargin={true}/>
        <motion.article
          viewport={{once: true}}
          initial="offscreen"
          whileInView="onscreen"
          className={styles.contentContainer}
        >
          <aside className={styles.galleryContainer}>
            <a className={`${styles.imgContainer} imgContainer`} href={questSecImg1} data-fancybox="questionnaire">
              <motion.span
                variants={opacityAnimation}
                transition={{
                  delay: 0.4,
                  duration: 0.2,
                  type: 'tween'
                }}
              >
                <img className={styles.img} src={questSecImg1} alt=""/>
              </motion.span>
            </a>
            <a className={`${styles.imgContainer} imgContainer`} href={questSecImg2} data-fancybox="questionnaire">
              <motion.span
                variants={opacityAnimation}
                transition={{
                  delay: 0.3,
                  duration: 0.2,
                  type: "tween",
                }}
              >
                <img className={styles.img} src={questSecImg2} alt=""/>
              </motion.span>
            </a>
            <a className={`${styles.imgContainer} imgContainer`} href={questSecImg3} data-fancybox="questionnaire">
              <motion.span
                variants={opacityAnimation}
                transition={{
                  delay: 0.2,
                  duration: 0.2,
                  type: "tween",
                }}
              >
                <img className={styles.img} src={questSecImg3} alt=""/>
              </motion.span>
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
        </motion.article>
      </Fancybox>
    </section>
  )
}
