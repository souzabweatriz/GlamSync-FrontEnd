"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import styles from "../styles/Post.module.css";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Post({ rota, title }) {
  const [data, setData] = useState({
    posts: [],
    loading: true,
    current: 1,
    pageSize: 5,
  });

  const [commentsByPostId, setCommentsByPostId] = useState({});
  const [openCommentsPostId, setOpenCommentsPostId] = useState(null);
  const [showLikes, setShowLikes] = useState({});
  const [showFollowing, setShowFollowing] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: posts } = await axios.get(
          `${rota}`,
          { headers: HEADERS }
        );
        setData({
          posts,
          loading: false,
          current: 1,
          pageSize: 5,
        });
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

  useEffect(() => {
    if (!data.loading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [data.current, data.pageSize]);

  useEffect(() => {
    const fetchComments = async () => {
      if (!openCommentsPostId) return;

      try {
        const { data: comments } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}comments/${openCommentsPostId}`,
          { headers: HEADERS }
        );

        setCommentsByPostId((prev) => ({
          ...prev,
          [openCommentsPostId]: comments,
        }));
      } catch {
        toast.error("Erro ao carregar comentários");
      }
    };

    fetchComments();
  }, [openCommentsPostId]);


  function handleLike(postId) {
    setShowLikes((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  }

  function handleFollow(userId) {
    setShowFollowing((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  }

  function handleCommentIconClick(postId) {
    setOpenCommentsPostId(prev =>
      prev === postId ? null : postId
    );
  }

  return (
    <div className={styles.main}>
      <ToastContainer />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        {data.loading ? (
          <Image
            src="/media/Flor.png"
            width={100}
            height={100}
            alt="Gif Carregando"
          />
        ) : (
          <div className={styles.cardsContainer}>
            {data.posts.map((post) => (
              <div className={styles.all} key={post.id}>
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
                    height={600}
                    unoptimized
                    onDoubleClick={() => handleLike(post.id)}
                  />
                  {openCommentsPostId === post.id && (
                    <aside className={styles.aside}>
                      <h1 className={styles.title}>Comments</h1>
                      {commentsByPostId[post.id]?.length ? (
                        commentsByPostId[post.id].map((comment, index) => (
                          <p key={index} className={styles.comment}>
                            <strong>@{comment.user}:</strong> {comment.text}
                          </p>
                        ))
                      ) : (
                        <p className={styles.comment}>Nenhum comentário ainda.</p>
                      )}
                    </aside>
                  )}
                </div>
                <div className={styles.icons}>
                  <Image
                    className={styles.icon}
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
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCommentIconClick(post.id)}
                  />
                  <span>{post.comments}</span>
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
    </div>
  );
}