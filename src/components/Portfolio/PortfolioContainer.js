import React from 'react'
import Portfolio from './Portfolio'
import styles from './PortfolioContainer.module.css'

const PortfolioContainer = () => {
  return (
    <section className={styles.portfolio}>
        <h2 data-aos="fade-up">Portfolio</h2>
        <Portfolio link='https://weather-app-gray-alpha.vercel.app/' styles="flex" photo="https://res.cloudinary.com/tuko/image/upload/v1664367421/portfolio/WeaherApp_ktrxaw.png" desc="Aplicacion del clima desarrollada con React donde podes buscar una ciudad y muestra los datos del clima."/>
        <Portfolio link='https://skateshop-seven.vercel.app/' styles="flex-reverse" photo="https://res.cloudinary.com/tuko/image/upload/v1664367426/portfolio/SkateShop_osd7cc.png" desc="E-Commerce desarrollado con React y Firebase como base de datos. Fue el proyecto final de un curso que realice."/>
        <Portfolio link='' styles="flex" photo="https://res.cloudinary.com/tuko/image/upload/v1664367650/portfolio/Manage_tlaicw.png" desc="Landing page para empresa Manage. Proyecto que fue realizado para un examen final de la carrera Certified Tech Developer."/>
    </section>
  )
}

export default PortfolioContainer