import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>WE CONNECT</h2>
        <h2 className={styles.title}>VERIFIED WORKERS</h2>
        <h2 className={styles.title}>TO TRUSTED EMPLOYERS</h2>
        <p className={styles.description}>
          {/* lorem30 */}
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          {/* Contact Me */}
        </a>
      </div>
      <img
        src={getImageUrl("hero/cleanhero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
