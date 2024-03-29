import Fancybox from '../../utils/fancybox';
import { motion } from 'framer-motion';

import { SectionTitle, CustomButton } from '../../components';
import styles from './Portfolio.module.css';
import pic1 from '../../assets/img/servicesGub1.webp';
import pic2 from '../../assets/img/servicesGub3.webp';
import pic3 from '../../assets/img/portfolio3.webp';
import { ReactComponent as Start } from '../../assets/svg/TrainingStar.svg';
import { opacityAnimation } from '../../utils/animation';

export const Portfolio = ({reference}) => {
  return (
    <section ref={reference.portfolio} className={`${styles.root} container section`}>
      <Fancybox>
        <SectionTitle title="Портфолио" subtitleFirst="Со мной ты будешь" subtitleSecond="самой яркой"/>
        <aside className={styles.star}>
          <Start/>
        </aside>
        <motion.article
          className={styles.contentContainer}
          viewport={{once: true}}
          initial="offscreen"
          whileInView="onscreen"
        >
          <a className={`${styles.imgContainer} imgContainer`} href={pic1} data-fancybox="portfolio">
            <motion.span variants={opacityAnimation(0.2)}>
              <img className={styles.img} src={pic1} alt="Profile work img"/>
            </motion.span>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} href={pic2} data-fancybox="portfolio">
            <motion.span variants={opacityAnimation(0.3)}>
              <img className={styles.img} src={pic2} alt="Profile work img"/>
            </motion.span>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} href={pic3} data-fancybox="portfolio">
            <motion.span variants={opacityAnimation()}>
              <img className={styles.img} src={pic3} alt="Profile work img"/>
            </motion.span>
            <aside className={styles.smallStar}>
              <Start/>
            </aside>
          </a>
        </motion.article>
        <aside className={styles.buttonContainer}>
          <CustomButton text="Все работы" inStyle="link" link="https://www.instagram.com/cejas_malaga/"/>
        </aside>
      </Fancybox>
    </section>
  )
}
