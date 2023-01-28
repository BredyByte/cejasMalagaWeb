import { SectionTitle, CustomButton } from '../../components'
import styles from './Training.module.css'
import Fancybox from '../../utils/fancybox';

import { img2, img1, img3 } from '../../assets/img/trainingPageExports';
import { ReactComponent as Ellipse1 } from '../../assets/svg/TrainingElipsWithStar1.svg';
import { ReactComponent as Start } from '../../assets/svg/TrainingStar.svg';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { opacityImgAnimation } from '../../utils/animation'

export const Training = ({reference}) => {
  const navigate = useNavigate()
  const onClickNavigate = () => {
    navigate('/training')
  }
  return (
    <section ref={reference.training} className={`${styles.root} container section`}>
      <Fancybox>
        <SectionTitle title="Обучение" subtitleFirst="Представляю вам" subtitleSecond="базовый курс"/>
        <motion.article
          className={styles.contentContainer}
          viewport={{once: true}}
          initial="offscreen"
          whileInView="onscreen"
        >
          <a className={`${styles.imgContainer} imgContainer`} href={img1} data-fancybox="training">
            <motion.span
              variants={opacityImgAnimation}
              transition={{
                delay: 0.6,
                duration: 0.4,
                type: "tween",
              }}
            >
              <img className={styles.img} src={img1} alt=""/>
            </motion.span>
            <aside className={styles.ellipse}>
              <Ellipse1/>
            </aside>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} href={img2} data-fancybox="training">
            <motion.span
              variants={opacityImgAnimation}
              transition={{
                delay: 0.4,
                duration: 0.4,
                type: "tween",
              }}
            >
              <img className={styles.img} src={img2} alt="" />
            </motion.span>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} href={img3} data-fancybox="training">
            <motion.span
              variants={opacityImgAnimation}
              transition={{
                delay: 0.2,
                duration: 0.4,
                type: "tween",
              }}
            >
              <img className={styles.img} src={img3} alt="" />
            </motion.span>
          </a>
          <aside className={styles.addition}>
            <Start/>
            <Start/>
          </aside>
        </motion.article>
        <aside className={styles.buttonContainer}>
          <CustomButton text="Обучаться" inStyle="btn" func={onClickNavigate}/>
        </aside>
      </Fancybox>
    </section>
  )
}
