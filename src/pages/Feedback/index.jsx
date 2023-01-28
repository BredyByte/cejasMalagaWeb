import { SectionTitle, CustomButton } from '../../components'
import feedback1 from '../../assets/img/feedback1.webp';
import feedback2 from '../../assets/img/feedback2.webp';
import feedback3 from '../../assets/img/feedback3.webp';
import { ReactComponent as SmallStar } from '../../assets/svg/SmallFeetbackStar.svg';
import { ReactComponent as BigStar } from '../../assets/svg/BigFeetbackStar.svg';
import Fancybox from '../../utils/fancybox';

import styles from './Feedback.module.css';
import { motion } from 'framer-motion'
import { opacityAnimation } from '../../utils/animation'

export const Feedback = ({reference}) => {
  return (
    <section ref={reference.feedback} className={`${styles.root} container section`}>
      <Fancybox>
        <SectionTitle subtitleFirst={"Как отзываются"} subtitleSecond={"мои клиенты"} title={"Отзывы"} />
        <motion.article
          className={styles.contentContainer}
          viewport={{once: true}}
          initial="offscreen"
          whileInView="onscreen"
        >
          <a className={`${styles.imgContainer} imgContainer`} data-fancybox="feedback" href={feedback1}>
            <motion.span
              variants={opacityAnimation}
              transition={{
                delay: 0.3,
                duration: 0.4,
                type: "tween",
              }}
            >
              <img className={styles.img} src={feedback1} alt="" />
            </motion.span>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} data-fancybox="feedback" href={feedback2}>
            <motion.span
              variants={opacityAnimation}
              transition={{
                delay: 0.2,
                duration: 0.4,
                type: "tween",
              }}
            >
              <img className={styles.img} src={feedback2} alt="" />
            </motion.span>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} data-fancybox="feedback" href={feedback3}>
            <motion.span
              variants={opacityAnimation}
              transition={{
                delay: 0.4,
                duration: 0.4,
                type: "tween",
              }}
            >
              <img className={styles.img} src={feedback3} alt="" />
            </motion.span>
          </a>
        </motion.article>
        <aside className={styles.buttonContainer}>
          <CustomButton text="Все отзывы" link={"https://www.instagram.com/stories/highlights/17948891671106395/"} inStyle="link"/>
        </aside>
        <aside className={styles.starsContainer}>
          <SmallStar/>
          <BigStar/>
        </aside>
      </Fancybox>
    </section>
  )
}