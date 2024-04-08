import styles from "./App.module.css";
import { About } from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Faqs from "./components/FAQS/Faqs"
import Home from "./pages/Home";
import Register from "./pages/Register"
import Getwork from "./pages/Getwork";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      {/* <Navbar />
      <Hero /> */}
      {/* <About /> */}
      {/* <Experience /> */}
      {/* <Projects />    
      <Faqs />
      <Footer /> */}

      <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/getwork" element={<Getwork />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
