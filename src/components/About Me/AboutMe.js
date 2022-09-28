import React from 'react'
import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <section className={styles.aboutMe} id='about'>
        <div className={styles.text} data-aos="fade-up">
            <h2>Acerca de mi</h2>
            <p>Hola me llamo Julian y soy desarrollador. Me apasiona el mundo de la tecnologia desde muy chico y disfruto capacitandome constantemente. Te invito a que veas mi trabajo realizados y las herramientas que utilizo.</p>
        </div>
    </section>
  )
}

export default AboutMe