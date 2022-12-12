import styles from './Services.module.css';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import { SliderSlick } from '../Slider/slider';
import { Footer } from '../../pages';
import { Caption } from './items';
<Caption />;
export const Services = ({ title }) => {
  return (
    <div className={` ${styles.root}  `}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttonBack}>
        <button className={styles.btn}>Назад</button>
      </div>
      <div className={styles.sliderPosition}>
        <SliderSlick />
      </div>

      <section className={styles.priceButtonContainer}>
        <div className={styles.price}>
          <h3>Цена: 20€</h3>
        </div>
        <div className={styles.buttonBooking}>
          <button className={styles.btn}>Записаться</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};
