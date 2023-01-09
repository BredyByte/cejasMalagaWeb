import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import styles from './ContactForm.module.css'
import { Checkbox, CustomButton } from '../../components'

export const ContactForm = ({reference}) => {
  const form = useRef()
  const checkBox = useRef()
  const [isChecked, setIsChecked] = useState(false)

  const defaultFormFields = {
    user_name: '',
    user_email: '',
    message: ''
  }
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {user_name, user_email, message} = formFields

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
    setIsChecked(false)
  }

  const showAlert = () => {
    reference.alert.current.classList.add('active')
    setTimeout(() => {
      reference.alert.current.classList.remove('active')
    }, 2000)
  };

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_b3u908q', 'template_8n34hij', form.current, 'a3wDv2Dis48Xd4fOC')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    showAlert();
    resetFormFields();
  }

  return (
    <form className={styles.root} onSubmit={sendEmail} ref={form}>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${(user_name && styles.active)}`}
          type="text"
          name="user_name"
          onChange={handleChange}
          value={user_name}
          required
        />
        <label className={styles.label}>Имя</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${(user_email && styles.active)}`}
          type="email"
          name="user_email"
          onChange={handleChange}
          value={user_email}
          required
        />
        <label className={styles.label}>Почта</label>
      </div>
      <div className={styles.inputContainer}>
        <textarea
          className={`${styles.input} ${(message && styles.active)}`}
          name="message"
          onChange={handleChange}
          value={message}
          required
        />
        <label className={styles.label}>Сообщение</label>
      </div>
      <div className={styles.checkboxContainer}>
        <Checkbox reference={checkBox} isChecked={isChecked} setIsChecked={setIsChecked}/>
      </div>
      <CustomButton text="Отправить" type="submit" inStyle="btn"/>
    </form>
  )
}
