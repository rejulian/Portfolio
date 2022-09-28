import React from 'react'
import './Portfolio.css'

const Portfolio = ({photo,desc,styles,link}) => {
  return (
    <div className={styles} data-aos="fade-up">
        <a href={link} target='_blank' rel="noreferrer"><img src={photo} alt="Project" /></a>
        <p>{desc}</p>
    </div>
  )
}

export default Portfolio