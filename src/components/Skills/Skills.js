import React from 'react'
import Logo from './Logo'
import styles from './Skills.module.css'

const Skills = () => {
  return (
    <section className={styles.skills}>
      
        <div data-aos="fade-up">
          <h2>Skills</h2>
          <div className={styles.container}>
              <div className={styles.logo}>
                  <Logo logo="https://res.cloudinary.com/tuko/image/upload/v1664329705/portfolio/htmlLogo_nwlxwn.png" text="HTML"/>
                  <Logo logo="https://res.cloudinary.com/tuko/image/upload/v1664329726/portfolio/jsLogo_vpsmr7.png" text="JAVASCRIPT"/>
                  <Logo logo="https://res.cloudinary.com/tuko/image/upload/v1664329687/portfolio/CssLogo_uktvny.png" text="CSS"/>
                  <Logo logo="https://res.cloudinary.com/tuko/image/upload/v1664329749/portfolio/GitLogo_zeacmq.png" text="GIT"/>
                  <Logo logo="https://res.cloudinary.com/tuko/image/upload/v1664329713/portfolio/ReactLogo_affauk.png" text="REACT"/>
                  <Logo logo="https://res.cloudinary.com/tuko/image/upload/v1664329739/portfolio/GitHubLogo_fbmpb7.png" text="GITHUB"/>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Skills