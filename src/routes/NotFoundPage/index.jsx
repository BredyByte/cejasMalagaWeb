import { useNavigate } from 'react-router-dom';

import styles from './NotFoundPage.module.css';
import { CustomButton } from '../../components/CustomUI/Buttons';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  }
  return (
    <div className={styles.root}>
      <div className={styles.contentContainer}>
        <h3 className={styles.title}>
          Ошибка 404
        </h3>
        <p className={styles.desc}>
          К сожалению, эта страница не была найдена
        </p>
        <aside className={styles.btnContainer}>
          <CustomButton text="Назад" inStyle="btnReverse" func={onClick}/>
        </aside>
      </div>
    </div>
  )
};
export default NotFoundPage;
