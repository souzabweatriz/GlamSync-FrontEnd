import React from "react";
import styles from "../styles/AboutSection.module.css";

const AboutSection = () => (
    <div className={styles.aboutSection}>
        <div className={styles.aboutTitle}>About</div>
        <div className={styles.aboutBio}>
            <span>“Viver é a coisa mais rara</span>
            <span> do mundo. A maioria das pessoas</span>
            <span> apenas existe.” - Oscar Wilde</span>
        </div>
    </div>
);

export default AboutSection;