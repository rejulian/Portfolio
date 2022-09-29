import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.text}>
              <h5 data-aos="fade-up">Hola, soy</h5>
              <h1 data-aos="fade-up">Julian Re</h1>
              <p data-aos="fade-up"><span>Frontend Developer</span></p>
              <a data-aos="fade-up" className={styles.btn} href="julian-re-curriculum.pdf" target="_blank" rel="noreferrer">CV</a>
              <a data-aos="fade-up" className={styles.btn} href="https://api.whatsapp.com/send?phone=3364631393" target="_blank" rel="noreferrer">Contactame</a>
          </div>
          <div>
              <img data-aos="fade-up" className={styles.heroImg} src="https://res.cloudinary.com/tuko/image/upload/v1664456492/portfolio/HeroCrop_wjcwef.jpg" alt="Hero" />
          </div>          
        </div>
        <div className={styles.arrow} data-aos="fade-up">
          <a href="#about"><span className="material-symbols-outlined">keyboard_double_arrow_down</span></a>
        </div>
    </section>
  )
}

export default Hero