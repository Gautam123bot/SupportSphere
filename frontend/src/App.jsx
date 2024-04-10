import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Faqs from "./components/FAQS/Faqs"
import Home from "./pages/Home";
import Register from "./pages/Register"
import Getwork from "./pages/Getwork";
import Signup from "./pages/Signup"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>

      <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/getwork" element={<Getwork />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
