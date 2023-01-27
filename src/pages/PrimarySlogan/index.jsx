import { CustomButton } from '../../components'

import styles from './PrimarySlogan.module.css';
import pic1 from '../../assets/img/primarySloganImg.webp';
import { ReactComponent as ListStart } from '../../assets/svg/ListStar.svg';
import { ReactComponent as Ellipse } from '../../assets/svg/PrimarySloganEllipse.svg';
import { ReactComponent as EllipseOutside } from '../../assets/svg/PrimarySloganOutsideEllipse.svg';
import { motion } from 'framer-motion';
import { textLineAppearance } from '../../utils/animation'


export const PrimarySlogan = () => {
  return (
    <>
      <section className={`${styles.root} container section`}>
        <article className={styles.contentContainer}>
          <h1 className={styles.title}>
              <div className={styles.titleLineContainer}>
                <motion.div
                  viewport={{once: true}}
                  variants={textLineAppearance}
                  initial="offscreen"
                  whileInView="onscreen"
                  transition={{
                      type: "tween",
                      duration: 0.6,
                      delay: 0.6
                  }}
                >
                  Тв<span>о</span>я красота
                </motion.div>
              </div>
              <div className={styles.titleLineContainer}>
                <motion.div
                  viewport={{once: true}}
                  variants={textLineAppearance}
                  initial="offscreen"
                  whileInView="onscreen"
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    delay: 0.8,
                  }}
                >
                  в моих руках
                </motion.div>
              </div>
          </h1>
          <motion.aside
            className={styles.imgContainer}
            animate={{opacity: 1}}
            transition={{
              type: "tween",
              duration: 0.6,
              delay: 0.6,
            }}
          >
            <div className={styles.imgContentContainer}>
              <motion.div className={styles.img} style={{backgroundImage: `url("${pic1}")`, backgroundSize: "cover", backgroundPosition: "center center"}}></motion.div>
            </div>
            <Ellipse className={styles.ellipse}/>
          </motion.aside>
          <aside className={styles.infoContainer}>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <motion.div
                  viewport={{once: true}}
                  variants={textLineAppearance}
                  initial="offscreen"
                  whileInView="onscreen"
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    delay: 0.8,
                  }}
                >
                  <ListStart/>
                  <span>Провела более 50 обучений</span>
                </motion.div>
              </li>
              <li className={styles.infoItem}>
                <motion.div
                  viewport={{once: true}}
                  variants={textLineAppearance}
                  initial="offscreen"
                  whileInView="onscreen"
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    delay: 0.8,
                  }}
                >
                  <ListStart/>
                  <span>Преподаватель авторского курса</span>
                </motion.div>
              </li>
            </ul>
          </aside>
          <motion.aside
            className={styles.btnContainer}
            animate={{opacity: 1}}
            transition={{
              type: "tween",
              duration: 0.6,
              delay: 0.8,
            }}
          >
            <CustomButton text="Записаться" inStyle="link" link="https://www.instagram.com/cejas_malaga/"/>
          </motion.aside>
        </article>
      </section>
      <EllipseOutside className={styles.outsideEllipse}/>
    </>
  )
}
