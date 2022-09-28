import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <form action="" className={styles.form}>
        <div className={styles.inputContainer}>
            <input type="text" placeholder='Nombre' data-aos="fade-up"/>
            <input type="text" placeholder='Apellido' data-aos="fade-up"/>
        </div>
        <div className={styles.inputMainInfo}>
            <input type="email" placeholder='Email' data-aos="fade-up"/>
            <input type="text" className={styles.message} placeholder='Su mensaje' data-aos="fade-up"/>
        </div>
        <button className={styles.submit} data-aos="fade-up">Enviar</button>
    </form>
  )
}

export default Form