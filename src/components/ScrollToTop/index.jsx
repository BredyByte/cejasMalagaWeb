import styles from './ScrollToTop.module.css';
import { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

export const ScrollToTop = () => {
  const [isShowed, setIsShowed] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 750) {
        setIsShowed(true)
      }else {
        setIsShowed(false);
      }
    })
  }, []);

  return (
    <a className={`${styles.toTopContainer} ${isShowed && styles.active}`} href="/#">
      <div className={styles.toTopBg}></div>
      <div className={styles.toTopButton}>
        <p>
          <BsChevronUp/>
        </p>
      </div>
    </a>
  )
};

