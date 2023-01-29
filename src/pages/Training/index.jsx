import Fancybox from '../../utils/fancybox';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { SectionTitle, CustomButton } from '../../components';
import styles from './Training.module.css';
import { img2, img1, img3 } from '../../assets/img/trainingPageExports';
import { ReactComponent as Ellipse1 } from '../../assets/svg/TrainingElipsWithStar1.svg';
import { ReactComponent as Start } from '../../assets/svg/TrainingStar.svg';
import { opacityAnimation } from '../../utils/animation';

export const Training = ({reference}) => {
  const navigate = useNavigate()
  const onClickNavigate = () => {
    navigate('/training')
  };
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
            <motion.span variants={opacityAnimation()}>
              <img className={styles.img} src={img1} alt=""/>
            </motion.span>
            <aside className={styles.ellipse}>
              <Ellipse1/>
            </aside>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} href={img2} data-fancybox="training">
            <motion.span variants={opacityAnimation(0.3)}>
              <img className={styles.img} src={img2} alt="" />
            </motion.span>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} href={img3} data-fancybox="training">
            <motion.span variants={opacityAnimation(0.2)}>
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
};
