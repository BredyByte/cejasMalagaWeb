import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { CustomButton, SectionTitle } from '../../components';
import { ReactComponent as ListStar } from '../../assets/svg/ListStar.svg';
import { ReactComponent as Ellipse } from '../../assets/svg/ServicesEllipse.svg';
import pic1 from '../../assets/img/portfolioImg.webp';
import styles from './Services.module.css';
import { opacityAnimation, scaleAnimation } from '../../utils/animation';

export const Services = ({reference}) => {
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/services')
  };
  return (
    <motion.section
      ref={reference.services}
      className={`${styles.root} container section`}
      viewport={{once: true}}
      initial="offscreen"
      whileInView="onscreen"
    >
      <SectionTitle title="Услуги" subtitleFirst="Предоставляю" subtitleSecond="лучшие услуги" isMargin={true}/>
      <article className={styles.contentContainer}>
        <aside className={styles.servicesListContainer}>
          <ul className={styles.servicesList}>
            <li className={styles.servicesItem}>
              <ListStar/>
              <p>Перманентный макияж губ</p>
            </li>
            <li className={styles.servicesItem}>
              <ListStar/>
              <p>Перманентный макияж бровей</p>
            </li>
            <li className={styles.servicesItem}>
              <ListStar/>
              <p>Ламинирование ресниц</p>
            </li>
          </ul>
        </aside>
        <motion.aside className={styles.imgSideContainer} variants={opacityAnimation()}>
          <div className={styles.imgContentContainer}>
            <motion.div
              className={styles.img}
              style={{backgroundImage: `url("${pic1}")`, backgroundSize: "cover", backgroundPosition: "center center"}}
              variants={scaleAnimation}
            ></motion.div>
          </div>
          <Ellipse className={styles.ellipse}/>
        </motion.aside>
      </article>
      <aside className={styles.buttonContainer}>
        <CustomButton text="Все услуги" inStyle="btn" func={onClickNavigate}/>
      </aside>
    </motion.section>
  )
};
