import React from 'react'
import styles from "../App.module.css"
import Footer from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Navbar } from '../components/Navbar/Navbar'
import { Projects } from '../components/Projects/Projects'
import Faqs from '../components/FAQS/Faqs'
import Reg_service from '../components/Reg_servicemen/Reg_service'

function Home() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Projects />
      <Reg_service />
      <Faqs />
      <Footer />
    </div>
  )
}

export default Home
