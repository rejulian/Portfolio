import React from 'react'
import styles from './FooterContainer.module.css'

const FooterContainer = () => {
  return (
    <section className={styles.footer}>
        <a href="https://www.linkedin.com/in/julian-re-544b89231/" rel="noreferrer" target="_blank"><img src="https://res.cloudinary.com/tuko/image/upload/v1664373883/portfolio/LinkedinLogo_njh1nj.png" alt="Linkedin Logo" /></a>
        <a href="https://github.com/rejulian" rel="noreferrer" target="_blank"><img className={styles.githubLogo} src="https://res.cloudinary.com/tuko/image/upload/v1664373643/portfolio/githubDarkLogo_o1kg5t.png" alt="GitHub Logo" /></a>
    </section>
  )
}

export default FooterContainer