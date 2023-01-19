import styles from './AdditionalPage.module.css';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { DropDownList, CustomButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

export const AdditionalPage = ({data, title}) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  }

  useEffect(() => {
    window.scrollTo(0,0);
    setIsActive(true);
  }, []);

  return (
    <div className={`${styles.root} ${isActive && styles.active}`}>
      <div className="container">
        <header className={styles.header}>
          <aside className={styles.btnContainer}>
            <CustomButton text="Назад" func={onClick} inStyle="btnReverse"/>
          </aside>
          <Logo className={styles.logo}/>
        </header>
        <main className={styles.main}>
          <h2 className={styles.pageTitle}>{title}</h2>
          <DropDownList data={data}/>
        </main>
        <footer className={styles.footer}>
          <Logo className={styles.logo}/>
        </footer>
      </div>
    </div>
  )
}