import styles from './SectionsTitle.module.css';

export const SectionTitle = ({subtitleFirst, subtitleSecond, title}) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.subtitleContainer}>
        <h3 className={styles.subtitle}>
          <span>{subtitleFirst}</span>
          <span className={styles.second}>{subtitleSecond}</span>
        </h3>
      </div>
    </div>
  )
}
