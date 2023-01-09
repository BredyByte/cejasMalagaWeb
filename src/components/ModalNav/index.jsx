import styles from './ModalNav.module.css';
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ListStar } from '../../assets/img/ListStar.svg';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import { RxCross1 } from 'react-icons/rx';

export const ModalNav = ({reference}) => {
  const navigate = useNavigate();
  return (
    <div ref={reference.navMenu} className={styles.root} id="modalNav">
      <span className={styles.cross}>
        <RxCross1 onClick={() => reference.navMenu.current.classList.remove("modalNavActive")}/>
      </span>
      <div className={styles.contentContainer}>
        <Logo className={styles.logo}/>
        <nav className={styles.navigation}>
          <li className={styles.navigationItem}>
            <p onClick={() => navigate("/training")}>Обучение</p>
          </li>
          <li className={styles.navigationItem}>
            <p onClick={() => navigate("/services")}>Услуги</p>
          </li>
        </nav>
        <aside className={styles.info}>
          <h6 className={styles.announcement}>
            Вы можете связаться со мной в будние дни с 10:00-20:00
          </h6>
          <ul className={styles.connectionList}>
            <li className={styles.connectionItem}>
              <ListStar/>
              <a href='https://www.google.com/maps/place/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%BE+%D0%B4%D0%B5+%D0%BB%D0%B0+%D0%AD%D0%BF%D0%B8%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F,+%D0%9C%D0%B0%D0%BB%D0%B0%D0%B3%D0%B0,+%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F/@36.7292463,-4.4165367,17z/data=!3m1!4b1!4m5!3m4!1s0xd72f7c692acd80b:0x760121b3b7423ef0!8m2!3d36.7305945!4d-4.4149938' target="_blank" rel="noreferrer">
                calle cristo de la epidemia 93
              </a>
            </li>
            <li className={styles.connectionItem}>
              <ListStar/>
              <a href='mailto:Chihiryova@ya.ru' target="_blank" rel="noreferrer">
                Chihiryova@ya.ru
              </a>
            </li>
            <li className={styles.connectionItem}>
              <ListStar/>
              <a href='https://www.instagram.com/cejas_malaga/' target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li className={styles.connectionItem}>
              <ListStar/>
              <a href='https://wa.me/message/ODU4EVFS7R36N1' target="_blank" rel="noreferrer">
                Whatsapp
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
