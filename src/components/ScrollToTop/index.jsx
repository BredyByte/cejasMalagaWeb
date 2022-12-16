import styles from './ScrollToTop.module.css'
import { useEffect, useState } from 'react'

export const ScrollToTop = () => {
  const [isShowed, setIsShowed] = useState(false );
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 750) {
        setIsShowed(true)
      }else {
        setIsShowed(false);
      }
    })
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  if(isShowed) {
    return (
      <div className={styles.toTopContainer} onClick={scrollToTop}>
        <div className={styles.toTopBg}></div>
        <div className={styles.toTopButton}>
          <p>
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    )
  } else {
    return
  }

}

