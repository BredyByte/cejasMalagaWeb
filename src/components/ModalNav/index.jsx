import styles from './ModalNav.module.css';
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ListStar } from '../../assets/img/ListStar.svg';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import { RxCross1 } from 'react-icons/rx';

const sideLinkList = [
  {
    id: 1,
    text: 'calle cristo de la epidemia 93',
    link: 'https://www.google.com/maps/place/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%BE+%D0%B4%D0%B5+%D0%BB%D0%B0+%D0%AD%D0%BF%D0%B8%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F,+%D0%9C%D0%B0%D0%BB%D0%B0%D0%B3%D0%B0,+%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F/@36.7292463,-4.4165367,17z/data=!3m1!4b1!4m5!3m4!1s0xd72f7c692acd80b:0x760121b3b7423ef0!8m2!3d36.7305945!4d-4.4149938',
  },
  {
    id: 2,
    text: 'Example@mail.com',
    link: 'link here',
  },
  {
    id: 3,
    text: 'Instagram',
    link: 'https://www.instagram.com/cejas_malaga/',
  },
  {
    id: 4,
    text: 'Whatsapp',
    link: 'link here',
  },
];

export const ModalNav = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <span className={styles.cross}>
        <RxCross1 onClick={() => navigate('/')}/>
      </span>
      <div className={styles.contentContainer}>
        <Logo className={styles.logo}/>
        <nav className={styles.navigation}>
          <li className={styles.navigationItem}>
            <p>Обучение</p>
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
            {
              sideLinkList.map(i => (
                <li className={styles.connectionItem} key={i.id}>
                  <ListStar/>
                  <a href={i.link} target="_blank" rel="noreferrer">
                    {i.text}
                  </a>
                </li>
              ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}
