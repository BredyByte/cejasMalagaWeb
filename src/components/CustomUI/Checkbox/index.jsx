import styles from './Checkbox.module.css';

export const Checkbox = ({ reference, isChecked, setIsChecked }) => {
  return (
    <div className={styles.checkboxRect}>
      <input
        ref={reference}
        type="checkbox"
        id="checkbox-rect1"
        name="check"
        onChange={() => setIsChecked(prev => !prev)}
        checked={isChecked}
        required
      />
        <label htmlFor="checkbox-rect1">я соглашаюсь с условием
          обработки персональных данных</label>
    </div>
  )
}

