"use client"
import styles from "../styles/Post.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button, Form, Input } from 'antd';

export default function Post() {

  const [modalInfo, setModalInfo] = useState ({
    visible: false,
    comment: null,
    loading: false,
  });

  const comments = [
  {
    user: {
      name: "arianagrande",
      avatar: "/avatars/user.png",
    },
    text: "OMGGG beautiful dress!!",
  },
  {
    user: {
      name: "selenagomes",
      avatar: "/avatars/user.png",
    },
    text: "Where I can buy it?!?!",
  },
  {
    user: {
      name: "dovecamaron",
      avatar: "/avatars/user.png",
    },
    text: "I loved <3",
  },
  {
    user: {
      name: "sabrinacarpinter",
      avatar: "/avatars/user.png",
    },
    text: "I wanna dress it on my show!!",
  },
  {
    user: {
      name: "lilnasx",
      avatar: "/avatars/user.png",
    },
    text: "I loved this shade of pink",
  },
  {
    user: {
      name: "cardib",
      avatar: "/avatars/user.png",
    },
    text: "So cutee",
  },
];

    const [showFollowing, setFollowing] = useState(false);
    const [showLikes, setShowLikes] = useState(false);

    const HeartVisibility = () => {
      setShowLikes(!showLikes);
    }

    const handleFollow = () => {
        setFollowing((prev) => !prev);
      };

      useEffect(() =>{
        const fetchComments = async () => {
            try {
                const { data: comments  } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/comments`,
                    {
                        headers: HEADERS,   
                    }
                );
                setData({comments, loading: false, current: 1, pageSize: 5});
            } catch (error) {
                toast.error("Erro ao carregar Comentários");
                setData((d) => ({ ...d, loading: false}));
            }
        };
        fetchComments();
      }, []);


    return(
        <div className={styles.container}>
            <ToastContainer />
        <h1 className={styles.title}>Feed</h1>
         <div className={styles.header}>
            <Image 
            src="/user.png" 
            alt="ícone de usuário" 
            width={40} 
            height={40} 
            />
            <p className={styles.user}>@username</p>
            <button className={styles.followBtn} onClick={handleFollow}>
            {showFollowing ? (
            <>
              Following
              <span className={styles.following}></span>
            </>
          ) : (
            <>
              Follow
              <span className={styles.plus}>+</span>
            </>
          )}
            </button>  
        </div>
        <div className={styles.all}>
        <div className={styles.postContent}>
            <Image 
            className={styles.image}
            src="/gato.jpg"
            alt="Imagem do Post"
            width={500}
            height={500}
            onDoubleClick={HeartVisibility}
            />
            <div className={styles.icons}>
        <Image 
        className={styles.icon}
        src={showLikes ? "/icons/coloredHeart.png" : "/icons/heart.png"} 
        alt="Coração de Like" 
        width={37} 
        height={37} 
        onClick={HeartVisibility} 
        />
        <Image
        className={styles.icon}
        src="/icons/comments.png"
        alt="ícone de comentário"
        width={37} 
        height={37} 
        />
            </div>
        </div> 

            <aside className={styles.aside}>
                <h1 className={styles.title}>Comments</h1>
       <ul className={styles.commentList}>
      {comments.map((comment, id) => (
        <li key={id} className={styles.commentItem}>
          <Image
            src={comment.user.avatar}
            alt={comment.user.name}
            width={40}
            height={40}
            className={styles.avatar}
          />
          <div>
            <span className={styles.username}>@{comment.user.name}</span>
            <div>{comment.text}</div>
            </div>
          </li>
        ))}
      </ul>
            </aside>
           </div> 
    </div>
    )
}