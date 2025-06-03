import React from "react";
import styles from "../styles/AboutSection.module.css";

const AboutSection = () => (
        <div className={styles.aboutSection}>
        <div className={styles.aboutTitle}>About</div>
        <div classname={styles.aboutBio}>
            “Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.” -Oscar Wilde
        </div>
    </div>
);

export default AboutSection;