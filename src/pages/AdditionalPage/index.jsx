import styles from './AdditionalPage.module.css';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import { DropDownList } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

export const AdditionalPage = ({data, title}) => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.button} onClick={() => navigate('/')}>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <polyline points="8 1 12 5 8 9"></polyline>
              <path d="M1,5 L11,5"></path>
            </svg>
            <span>Назад</span>
          </p>
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