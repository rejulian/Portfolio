import React from 'react'
import styles from './Skills.module.css'

const Logo = ({logo, text}) => {
  return (
    <div className={styles.logoFlex}>
        <img src={logo} alt="" />
        <p>{text}</p>
    </div>
  )
}

export default Logo