import React from "react";
import styles from "../../styles/notification.module.css";
import NotificationItem from "../../components/NotificationItem";
import Image from "next/image";
import SuggestionItem from "../../components/SuggestionItem";
import Header from "../../components/Header";

const Notification = () => {
    const notifications = [
        ["@username and more 2", "Started following you.", "Today"],
        ["@username and more 40", "Liked your post.", "Today"],
        ["@username", "Mentioned you on their post.", "Today"],
        ["@username", "Started following you.", "Yesterday"],
        ["@username", "Started following you.", "28 Apr"],
        ["@username and more 22", "Liked your post.", "31 Mar"],
    ];
    const suggestions = [
        ["@mileycyrus", "followed by 4_yob", "https://br.web.img2.acsta.net/c_162_216/pictures/20/01/08/03/01/2316985.jpg"],
        ["@cynthiaerivo", "followed by fernfj", "https://i.pinimg.com/736x/cb/76/1f/cb761ff18514ca115e2958d0e0f012f3.jpg"],
        ["@zendaya", "followed by user0908", "https://i.pinimg.com/236x/0e/3c/c9/0e3cc946d2d82e043438fcc45cf05360.jpg"],
        ["@sia", "followed by user0908", "https://www.hollywoodreporter.com/wp-content/uploads/2019/07/siaperforming.jpg?w=200&h=200&crop=1"],
        ["@taylorswift", "followed by user0908", "https://i.pinimg.com/736x/f0/83/25/f0832526353cd4326d7f4d86f9532f69.jpg"],
        ["@dualipa", "followed by user0908", "https://i.pinimg.com/564x/23/a5/9a/23a59a9ac6b4e82543cf05c118fe3b35.jpg"],
    ];

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.notifications}>
                        <h2 className={styles.title}>Notifications Center</h2>
                        <div>
                            {notifications.map(([user, action, date], i) => (
                                <NotificationItem
                                    key={i}
                                    user={user}
                                    action={action}
                                    date={date}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.suggestions}>
                        <h2 className={styles.title}>Suggestions for you</h2>
                        <div>
                            {suggestions.map(([username, text, image], i) => (
                                <SuggestionItem
                                    key={i}
                                    username={username}
                                    text={text}
                                    image={image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;