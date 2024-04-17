import React from 'react'
import styles from "../App.module.css"
import Footer from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Navbar } from '../components/Navbar/Navbar'
// import { Projects } from '../components/Projects/Projects'
import Faqs from '../components/FAQS/Faqs'
import Reg_service from '../components/Reg_servicemen/Reg_service'
import Allservice from '../components/Services/Allservice'
import Feedbackcr from '../components/Carousel_feedback/Feedbackcr'

function Home() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      {/* <Projects /> */}
      <Reg_service />
      <Allservice />
      <Feedbackcr />
      <Faqs />
      <Footer />
    </div>
  )
}

export default Home
