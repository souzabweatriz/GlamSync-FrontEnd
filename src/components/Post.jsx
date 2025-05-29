"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import styles from "../styles/Post.module.css";
import { Pagination } from "antd";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Post() {
  const [data, setData] = useState({
    posts: [],
    loading: true,
    current: 1,
    pageSize: 5,
  });

  const [showLikes, setShowLikes] = useState({});
  const [showFollowing, setShowFollowing] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: posts } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/posts`,
          { headers: HEADERS }
        );
        setData({
          posts,
          loading: false,
          current: 1,
          pageSize: 5,
        });
        console.log(posts);
      } catch {
        toast.error("Erro ao carregar posts");
        setData({
          posts: [],
          loading: false,
          current: 1,
          pageSize: 5,
        });
      }
    };
    fetchPosts();
  }, []);

  function paginatedPosts() {
    const start = (data.current - 1) * data.pageSize;
    return data.posts.slice(start, start + data.pageSize);
  }

  function handleLike(postId) {
    setShowLikes({
      ...showLikes,
      [postId]: !showLikes[postId],
    });
  }

  function handleFollow(userId) {
    setShowFollowing({
      ...showFollowing,
      [userId]: !showFollowing[userId],
    });
  }

  return (
    <div className={styles.main}>
      <ToastContainer />
      <h1 className={styles.title}>Feed</h1>
      <div className={styles.container}>
        {data.loading ? (
          <Image
            src="/media/loading.gif"
            width={100}
            height={100}
            alt="Gif Carregando"
          />
        ) : (
          <div className={styles.cardsContainer}>
            {paginatedPosts().map((post) => (
              <div className={styles.all} key={post.id}>
                <div className={styles.postContent}>
                  <Image
                    className={styles.image}
                    src={
                      post.photo
                        ? `${process.env.NEXT_PUBLIC_IMG_URL}${post.photo}.jpg`
                        : "/icons/220.svg"
                    }
                    alt={`Post de ${post.user_id}`}
                    width={500}
                    height={500}
                    unoptimized
                  />
                  <div className={styles.icons}>
                    <Image
                      className={`${styles.icon} ${showLikes[post.id] ? styles.liked : ""}`}
                      src={
                        showLikes[post.id]
                          ? "/icons/coloredHeart.png"
                          : "/icons/heart.png"
                      }
                      alt="Coração de Like"
                      width={30}
                      height={30}
                      onClick={() => handleLike(post.id)}
                    />
                    <span>{post.likes + (showLikes[post.id] ? 1 : 0)}</span>
                    <Image
                      className={styles.icon}
                      src="/icons/comments.png"
                      alt="ícone de comentário"
                      width={31}
                      height={31.2}
                    />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <div className={styles.header}>
                  <Image
                    src={
                      post.user_photo
                        ? `${process.env.NEXT_PUBLIC_IMG_URL}${post.user_photo}.jpg`
                        : "/icons/220.svg"
                    }
                    alt={`Foto de ${post.user_name}`}
                    width={40}
                    height={40}
                    className={styles.avatar}
                    unoptimized
                  />
                  <p className={styles.user}>@{post.user_name}</p>
                  <button
                    className={styles.followBtn}
                    onClick={() => handleFollow(post.user_id)}
                  >
                    {showFollowing[post.user_id] ? (
                      <>
                        Following <span className={styles.following}></span>
                      </>
                    ) : (
                      <>
                        Follow <span className={styles.plus}>+</span>
                      </>
                    )}
                  </button>
                </div>
                <p className={styles.contentText}>{post.content}</p>
                <span className={styles.date}>
                  {new Date(post.created_at).toLocaleString("pt-BR")}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination
        className={styles.pagination}
        current={data.current}
        pageSize={data.pageSize}
        total={data.posts.length}
        onChange={(page, size) =>
          setData({
            ...data,
            current: page,
            pageSize: size,
          })
        }
        showSizeChanger
        pageSizeOptions={["5", "10", "100"]}
      />
    </div>
  );
}