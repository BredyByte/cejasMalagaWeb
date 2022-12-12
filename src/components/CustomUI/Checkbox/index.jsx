import styles from './Checkbox.module.css';

export const Checkbox = () => {
  return (
    <div className={styles.checkboxRect}>
      <input
        type="checkbox"
        id="checkbox-rect1"
        name="check"
        required
      />
        <label htmlFor="checkbox-rect1">я соглашаюсь с условием
          обработки персональных данных</label>
    </div>
  )
}

