import React, { useEffect, useState } from 'react'
import styles from './Loader.module.css';

export const Loader = () => {
  const [ isActive, setIsActive ] = useState(false);
  useEffect(() => {
    setIsActive(true)
  }, []);
  return (
    <div className={styles.root}>
      <div className={`${styles.loader} ${isActive && styles.active}`}></div>
    </div>
  )
}

