import styles from './ModalNav.module.css';
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ListStar } from '../../assets/svg/ListStar.svg';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
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
            <p onClick={() => navigate("training")}>Обучение</p>
          </li>
          <li className={styles.navigationItem}>
            <p onClick={() => navigate("services")}>Услуги</p>
          </li>
        </nav>
        <aside className={styles.info}>
          <h6 className={styles.announcement}>
            Вы можете связаться со мной в будние дни с 10:00-20:00
          </h6>
          <ul className={styles.connectionList}>
            <li className={styles.connectionItem}>
              <ListStar/>
              <a href='https://goo.gl/maps/e6GZSVoznfLFvHn27' target="_blank" rel="noreferrer">
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
