import styles from './SectionsTitle.module.css';
export const SectionTitle = ({text = "Какой-то текст"}) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.subtitleContainer}>
        <h3 className={styles.subtitle}>{text}</h3>
      </div>
    </div>
  )
}
