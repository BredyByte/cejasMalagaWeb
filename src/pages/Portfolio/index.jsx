import { SectionTitle, CustomButton } from '../../components'
import styles from './Portfolio.module.css'
import Fancybox from '../../utils/fancybox'

import pic1 from '../../assets/img/servicesGub1.webp'
import pic2 from '../../assets/img/servicesGub3.webp'
import pic3 from '../../assets/img/portfolio3.webp'
import { ReactComponent as Start } from '../../assets/svg/TrainingStar.svg'

export const Portfolio = ({reference}) => {
  return (
    <section ref={reference.portfolio} className={`${styles.root} container section`}>
      <Fancybox>
        <SectionTitle title="Портфолио" subtitleFirst="Со мной ты будешь" subtitleSecond="самой яркой"/>
        <aside className={styles.star}>
          <Start/>
        </aside>
        <article className={styles.contentContainer}>
          <a className={`${styles.imgContainer} imgContainer`} href={pic1} data-fancybox="portfolio">
            <img className={styles.img} src={pic1} alt="Profile work img"/>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} href={pic2} data-fancybox="portfolio">
            <img className={styles.img} src={pic2} alt="Profile work img"/>
          </a>
          <a className={`${styles.imgContainer} imgContainer`} href={pic3} data-fancybox="portfolio">
            <img className={styles.img} src={pic3} alt="Profile work img"/>
            <aside className={styles.smallStar}>
              <Start/>
            </aside>
          </a>
        </article>
        <aside className={styles.buttonContainer}>
          <CustomButton text="Все работы" inStyle="link" link="https://www.instagram.com/cejas_malaga/"/>
        </aside>
      </Fancybox>
    </section>
  )
}
