import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import "./styles.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {/* MaidMyDay */}
        <img src={getImageUrl("images/log.png")} alt="" />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/close.png")
              : getImageUrl("nav/menu1.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className="bg-white px-5 py-6 ullinav cursor-pointer rounded-xl">
            <a href="/" className="group text-black transition duration-300">
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
          </li>
          <li className="bg-white px-5 py-6 ullinav cursor-pointer rounded-xl">
            <a href="#" className="group text-black transition duration-300">
              About
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
          </li>
          <li className="bg-white px-5 py-6 ullinav cursor-pointer rounded-xl">
            <a href="#" className="group text-black transition duration-300">
              Experience
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
          </li>
          <li className="bg-white px-5 py-6 ullinav cursor-pointer rounded-xl">
            <a href="#" className="group text-black transition duration-300">
              Projects
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
