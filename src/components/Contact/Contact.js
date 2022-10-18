import React from 'react'
import styles from './Contact.module.css'
import LogoContact from './LogoContact'


const Contact = () => {
  return (
    <section className={styles.contact}>
        <div className={styles.contactText}>
            <h2 data-aos="fade-up">¿ALGÚN PROYECTO EN MENTE?</h2>
            <p data-aos="flip-up">Si tenés algún proyecto de desarrollo web no dudes en ponerte en contacto conmigo y te brindaré mi ayuda.</p>
            <hr className={styles.line}/>
        </div>
        <div className={styles.logo} data-aos="fade-up">
                <LogoContact logo="phone_in_talk" info="+54 3364 631393"/>
                <LogoContact logo="mail" info="julianre2021@gmail.com"/>
        </div>
        {/* <Form/> */}
        <div className={styles.whatsappContainer}>
            <a data-aos="fade-up" className={styles.btnWSP} href="https://api.whatsapp.com/send?phone=3364631393" target="_blank" rel="noreferrer">Contactame</a>
        </div>
    </section>
  ) 
}

export default Contact