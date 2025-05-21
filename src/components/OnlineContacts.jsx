import React from "react";
import styles from "../styles/OnlineContacts.module.css";

const OnlineContacts = () => {
    return (
        <div className={styles.box}>
            <h3>
                Online Contacts <span className={styles.onlineDot} />
            </h3>
            <div className={styles.avatares}>
                {[...Array(5)].map ((_, i) => (
                    <div key={i} className={styles.user}>
                        <div className={styles.avatar}>
                            <div className={styles.greenDot}></div>
                        </div>
                        <p>@username
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default OnlineContacts;