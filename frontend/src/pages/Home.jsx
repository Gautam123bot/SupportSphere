import React from 'react'
import styles from "../App.module.css"
import { About } from '../components/About/About'
import Footer from '../components/Footer/Footer'
import { Experience } from '../components/Experience/Experience'
import { Hero } from '../components/Hero/Hero'
import { Navbar } from '../components/Navbar/Navbar'
import { Projects } from '../components/Projects/Projects'
import Faqs from '../components/FAQS/Faqs'

function Home() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Experience /> */}
      <Projects />
      <Faqs />
      <Footer />
    </div>
  )
}

export default Home
