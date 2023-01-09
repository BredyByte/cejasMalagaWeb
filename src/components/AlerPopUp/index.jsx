import styles from './AlerPopUp.css';

export const AlerPopUp = ({ reference }) => {
  return (
    <div ref={reference.alert} className="alert">
      Письмо успешно отправлено!
    </div>
  )
}

