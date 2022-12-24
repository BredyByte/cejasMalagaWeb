import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from './ContactForm.module.css';
import { Checkbox, CustomButton } from '../../components'

export const ContactForm = () => {
  const form = useRef();

  const defaultFormFields = {
    user_name: '',
    user_email: '',
    message: '',
  }
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { user_name, user_email, message } = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields,  [name]: value});
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b3u908q', 'template_8n34hij', form.current, 'a3wDv2Dis48Xd4fOC')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    resetFormFields();
  };

  return (
    <form className={styles.root} onSubmit={sendEmail} ref={form} >
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${(user_name && styles.active)}`}
          type="text"
          name="user_name"
          onChange={handleChange}
          value={user_name}
          required
        />
        <label className={styles.label}>Name</label>
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
        <label className={styles.label}>Email</label>
      </div>
      <div className={styles.inputContainer}>
        <textarea
          className={`${styles.input} ${(message && styles.active)}`}
          name="message"
          onChange={handleChange}
          value={message}
          required
        />
        <label className={styles.label}>Message</label>
      </div>
      <div className={styles.checkboxContainer}>
        <Checkbox/>
      </div>
      <CustomButton text="Отправить" type="submit" inStyle="btn"/>
    </form>
  )
}
