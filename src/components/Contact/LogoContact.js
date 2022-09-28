import React from 'react'
import styles from './Contact.module.css'

const LogoContact = ({logo, info}) => {
  return (
    <div className={styles.logoInfo}>
        <span className="material-symbols-outlined">{logo}</span>
        <p>{info}</p>
    </div>
  )
}

export default LogoContact