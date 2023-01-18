import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

import { SectionTitle, CustomButton } from '../../components';
import pic1 from '../../assets/img/aboutPageImg.jpg';
import { ReactComponent as ListStar } from '../../assets/img/ListStar.svg';
import { ReactComponent as Ellipse } from '../../assets/img/AboutEllipse.svg';
import styles from './About.module.css';

export const About = ({reference}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  return (
    <section ref={reference.about} className={`${styles.root} container section`}>
      <SectionTitle
        title="Обо мне"
        subtitleFirst="Ваш мастер"
        subtitleSecond="Мария Рoдионова"
        isBold={true}
        isPadding={false}
        isMargin={true}
      />
      <article className={styles.contentContainer}>
        <aside className={styles.imgContainer}>
          <div className={styles.imgContentContainer}>
            <div
              className={styles.img}
              style={{backgroundImage: `url("${pic1}")`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            </div>
          </div>
          <Ellipse className={styles.ellipse}/>
          <aside className={styles.btnContainer}>
            <CustomButton text="Instagram" inStyle="link" link="https://www.instagram.com/cejas_malaga/"/>
          </aside>
        </aside>
        <aside className={styles.listContainer}>
          <li className={styles.listItem}>
            <ListStar/>
            <span>
              Базовый авторский курс по
              бровям с бесплатной
              поддержкой в течение месяца
            </span>
          </li>
          <li className={styles.listItem}>
            <ListStar/>
            <span>
              За 5 лет своей работы сделала
              счастливыми 1000+ тысяч
              женщин
            </span>
          </li>
          <li className={styles.listItem}>
            <ListStar/>
            <span>
              Использую стерильные и
              одноразовые инструменты, а
              также материалы из СНГ,
              которые обеспечивают
              натуральность, безопасность и
              дают стабильный результат
              на 100%
            </span>
          </li>
        </aside>
      </article>
      <article className={styles.achievements} ref={ref}>
        <div className={styles.achievItem}>
          <span className={styles.achievNum}>
            {
              inView ? <CountUp end={5} duration={2}/> : 0
            }
          </span>
          <span className={styles.achievText}>лет опыта работы</span>
        </div>
        <div className={styles.achievItem}>
          <span className={styles.achievNum}>
            {
              inView ? <CountUp end={100} duration={2}/> : 0
            }+
          </span>
          <span className={styles.achievText}>счастливых девушек</span>
        </div>
        <div className={styles.achievItem}>
          <span className={styles.achievNum}>
         {
           inView ? <CountUp end={100} duration={2}/> : 0
         }%
          </span>
          <span className={styles.achievText}>результат</span>
        </div>
      </article>
    </section>
  )
}
