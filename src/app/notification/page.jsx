import React from "react";
import styles from "./notification.module.css";

const Notification = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.backButton}>←</div>
          <div style={styles.logo}>Glamsync</div>
          <div style={styles.menu}>•••</div>
        </div>

        <div style={styles.content}>
          <div style={styles.notifications}>
            <h2 style={styles.title}>Notifications Center</h2>
            <div>
              {[
                ["@username and more 2", "Started following you.", "Today"],
                ["@username and more 40", "Liked your post.", "Today"],
                ["@username", "Mentioned you on their post.", "Today"],
                ["@username", "Started following you.", "Yesterday"],
                ["@username", "Started following you.", "28 Apr"],
                ["@username and more 22", "Liked your post.", "31 Mar"],
              ].map(([user, action, date], i) => (
                <div key={i} style={styles.notification}>
                  <div style={styles.avatar}></div>
                  <div style={styles.text}>
                    <p style={styles.p}>
                      <b>{user}</b>
                      <br />
                      {action}
                    </p>
                    <span style={styles.date}>{date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.suggestions}>
            <h2 style={styles.title}>Suggestions for you</h2>
            <div>
              {[
                ["@mileycyrus", "followed by _.x.job"],
                ["@cynthiaerivo", "followed by fernfj"],
                ["@zendaya", "followed by user0908"],
                ["@sia", "followed by user0908"],
                ["@taylorswift", "followed by user0908"],
                ["@dualipa", "followed by user0908"],
              ].map(([username, text], i) => (
                <div key={i} style={styles.suggestion}>
                  <div style={styles.profilePic}></div>
                  <div style={styles.info}>
                    <p style={styles.username}>{username}</p>
                    <p style={styles.followed}>{text}</p>
                  </div>
                  <button style={styles.followButton}>FOLLOW</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;