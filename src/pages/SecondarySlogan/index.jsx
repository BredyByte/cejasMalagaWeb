import styles from './SecondarySlogan.module.css';
import { ReactComponent as Stars } from '../../assets/img/StarsSecondarySlogan.svg'
import { ReactComponent as Ellipse } from '../../assets/img/EllipseSecondarySlogan.svg'

export const SecondarySlogan = () => {
  return (
    <section className={`${styles.root} section`}>
      <Ellipse className={styles.ellipse}/>
      <Stars className={styles.stars}/>
      <h2 className={styles.titleContainer}>
        <aside className={styles.titleItem}>
          <p>Знаю секрет</p>
        </aside>
        <aside className={styles.titleItem}>
          <p>натуральных</p>
        </aside>
        <aside className={styles.titleItem}>
          <p>бровей</p>
          <span className={styles.circle}></span>
        </aside>
      </h2>
    </section>
  )
}

