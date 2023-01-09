import { CustomButton, SectionTitle } from '../../components';
import { ReactComponent as ListStar } from '../../assets/img/ListStar.svg';
import { ReactComponent as Ellipse } from '../../assets/img/ServicesEllipse.svg';
import pic1 from '../../assets/img/PortfolioImg.jpg';
import { useNavigate } from 'react-router-dom'

import styles from './Services.module.css';

export const Services = ({reference}) => {
  const navigate = useNavigate()
  const onClickNavigate = () => {
    navigate('/services')
  }
  return (
    <section ref={reference.services} className={`${styles.root} container section`}>
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
        <aside className={styles.imgSideContainer}>
          <div className={styles.imgContentContainer}>
            <div className={styles.img} style={{backgroundImage: `url("${pic1}")`, backgroundSize: "cover", backgroundPosition: "center center"}}>
            </div>
          </div>
          {/*<img className={styles.img} src={p1} alt=""/>*/}
          <Ellipse className={styles.ellipse}/>
        </aside>
      </article>
      <aside className={styles.buttonContainer}>
        <CustomButton text="Все услуги" inStyle="btn" func={onClickNavigate}/>
      </aside>
    </section>
  )
}
