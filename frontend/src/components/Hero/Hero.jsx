import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className="text-black font-mono lg:text-6xl text-2xl sm:text-4xl xs:text-2xl">WE CONNECT</h2>
        <h2 className="text-black font-mono lg:text-6xl text-2xl sm:text-4xl xs:text-2xl">VERIFIED WORKERS</h2>
        <h2 className="text-black font-mono lg:text-6xl text-2xl sm:text-4xl xs:text-2xl">TO TRUSTED EMPLOYERS</h2>
        <div className="mt-6">
          
          <a href="/register" className="text-white rounded-xl py-4 px-8 bg-slate-700 text-2xl hover:bg-slate-950">Register</a></div>
      </div>
      <img
        src={getImageUrl("hero/cleanhero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} /> */}
      {/* <div className={styles.bottomBlur} /> */}
    </section>
  );
};
