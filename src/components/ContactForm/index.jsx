import styles from './ContactForm.module.css';
import { Checkbox, CircleButton } from '../../components'

export const ContactForm = () => {
  return (
    <form action="" className={styles.root}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          required
        />
        <label className={styles.label}>Name</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          required
        />
        <label className={styles.label}>Email</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          required
        />
        <label className={styles.label}>Message</label>
      </div>
      <div className={styles.checkboxContainer}>
        <Checkbox/>
      </div>
      <CircleButton text="Отправить" type="submit"/>
    </form>
  )
}
