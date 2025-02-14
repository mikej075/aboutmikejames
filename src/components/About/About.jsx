import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/computer.png")}
          alt="My Cover Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I have professional experience building fully responsive webpages using HTML/CSS, JavaScript, React, jQuery, Shopify, and WordPress for both startups and established companies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Server Maintenance</h3>
              <p>
              I have hands-on experience maintaining application servers, performing installs and updates through scripts, configuring auto-schedulers, and setting up SFTP to transfer data to offsite servers.
              </p>
            </div>
          </li>
             <li className={styles.aboutItem}>
            <img src={getImageUrl("about/DBIcon.png")} alt="DB icon" />
            <div className={styles.aboutItemText}>
              <h3>Database Engineer</h3>
              <p>
              I have experience writing SQL queries and Power Queries to extract data from Oracle databases. Additionally, I have worked with MySQL and have set up cloud databases for personal projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
