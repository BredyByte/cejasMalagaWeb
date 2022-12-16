import styles from './SectionsTitle.module.css';

export const SectionTitle = ({subtitleFirst, subtitleSecond, title, isMargin, isPadding = true, isBold}) => {
  return (
    <div className={`${styles.root} ${isMargin ? styles.marginLeft70: ''}` }>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.subtitleContainer}>
        <h3 className={styles.subtitle}>
          <span>{subtitleFirst}</span>
          <span
            className={`
            ${styles.second} 
            ${isPadding && styles.paddingLeft} 
            ${isBold && styles.fontBold}`}
          >
            {subtitleSecond}
          </span>
        </h3>
      </div>
    </div>
  )
}
