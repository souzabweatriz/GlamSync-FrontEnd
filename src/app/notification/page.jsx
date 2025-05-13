import React from "react";
import styles from "../../styles/notification.module.css";
import NotificationItem from "../../components/NotificationItem";
import Image from "next/image";
import SuggestionItem from "../../components/SuggestionItem";

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
        ["@mileycyrus", "followed by 4_yob", "https://rollingstone.com.br/media/uploads/miley_cyrus_na_kiss_fm_foto_john_phillipsgetty_images.jpg"],
        ["@cynthiaerivo", "followed by fernfj", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWrsp6WvWh4AgZnSo5zUCFCIOfc7cT_JJTA&s"],
        ["@zendaya", "followed by user0908", "https://movieplayer.net-cdn.it/t/images/2020/01/27/zendaya_jpg_400x0_crop_q85.jpg"],
        ["@sia", "followed by user0908", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNiW6wNncxRPH95IPdtmFiXavImn8NV2UKQ&s"],
        ["@taylorswift", "followed by user0908", "https://wallpapers.com/images/hd/taylor-swift-pictures-y8wyxeogqlr4f164.jpg"],
        ["@dualipa", "followed by user0908", "https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg631e7c61106420.53307376.jpg%3FlastEdited%3D1662942308&w=400&h=400&f=webp"],
    ];

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Image
                        className={styles.back_icon}
                        src="/icons/back-icon.png"
                        alt="icon de voltar"
                        width={50}
                        height={50}
                    />
                    <div className={styles.logo}>GlamSync</div>
                    <div className={styles.icons}>
                        <div className={styles.bellIcon}></div>
                        <div className={styles.menu}></div>
                    </div>
                </div>
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