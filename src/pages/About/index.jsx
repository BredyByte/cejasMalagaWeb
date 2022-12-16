import { SectionTitle, CustomButton } from '../../components'
import pic1 from '../../assets/img/AboutPic.jpeg'
import { ReactComponent as ListStar } from '../../assets/img/ListStar.svg'
import { ReactComponent as Ellipse } from '../../assets/img/AboutEllipse.svg'

import styles from './About.module.css'

export const About = ({referens}) => {
  return (
    <section ref={referens.about} className={`${styles.root} container section`}>
      <SectionTitle
        title="Обо мне"
        subtitleFirst="Ваш мастер"
        subtitleSecond="Мария Радионова"
        isBold={true}
        isPadding={false}
        isMargin={true}
      />
      <article className={styles.contentContainer}>
        <aside className={styles.imgContainer}>
          <div>
            <img className={styles.img} src={pic1} alt=""/>
            <Ellipse className={styles.ellipse}/>
          </div>
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
      <article className={styles.achievements}>
        <div className={styles.achievItem}>
          <span className={styles.achievNum}>5</span>
          <span className={styles.achievText}>лет опыта работы</span>
        </div>
        <div className={styles.achievItem}>
          <span className={styles.achievNum}>1000+</span>
          <span className={styles.achievText}>счастливых девушек</span>
        </div>
        <div className={styles.achievItem}>
          <span className={styles.achievNum}>100%</span>
          <span className={styles.achievText}>результат</span>
        </div>
      </article>
    </section>
  )
}
