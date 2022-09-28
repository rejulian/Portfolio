import React from 'react'
import AboutMe from '../About Me/AboutMe'
import Contact from '../Contact/Contact'
import PortfolioContainer from '../Portfolio/PortfolioContainer'
import Skills from '../Skills/Skills'

const Main = () => {
  return (
    <main>
        <AboutMe/>
        <Skills/>
        <PortfolioContainer/>
        <Contact/>
    </main>
  )
}

export default Main