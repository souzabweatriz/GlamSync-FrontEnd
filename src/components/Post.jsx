"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import styles from "../styles/Post.module.css";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Post({ rota, title }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [commentsByPostId, setCommentsByPostId] = useState({});
  const [openCommentsPostId, setOpenCommentsPostId] = useState(null);
  const [showLikes, setShowLikes] = useState({});
  const [showFollowing, setShowFollowing] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(rota, { headers: HEADERS });
        setPosts(data);
        await fetchAllComments(data);
      } catch {
        toast.error("Erro ao carregar posts");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [rota]);

  const fetchAllComments = async (postsData) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}comments`,
        { headers: HEADERS }
      );

      const allComments = Array.isArray(data)
        ? data
        : Array.isArray(data.comments)
        ? data.comments
        : [];

      const grouped = postsData.reduce((acc, post) => {
        acc[post.id] = allComments
          .filter((comment) => comment.post_id === post.id)
          .sort((a, b) => new Date(b.date_comment) - new Date(a.date_comment));
        return acc;
      }, {});

      setCommentsByPostId(grouped);
    } catch (error) {
      toast.error("Erro ao carregar comentários");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 5000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLike = (postId) => {
    setShowLikes((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleFollow = (userId) => {
    setShowFollowing((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const handleCommentIconClick = (postId) => {
    setOpenCommentsPostId((prev) => (prev === postId ? null : postId));
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <ToastContainer />
      <div className={styles.container}>
        {loading ? (
          <Image
            src="/media/flowerGif.gif"
            width={100}
            height={100}
            alt="Gif Carregando"
          />
        ) : (
          <div className={styles.cardsContainer}>
            {posts.map((post) => (
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
                      <>Following <span className={styles.following}></span></>
                    ) : (
                      <>Follow <span className={styles.plus}>+</span></>
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
                    width={600}
                    height={100}
                    unoptimized
                    onDoubleClick={() => handleLike(post.id)}
                  />
                  {openCommentsPostId === post.id && (
                    <aside className={styles.aside}>
                      <h1 className={styles.title}>Comments</h1>
                      <ul className={styles.commentList}>
                        {(commentsByPostId[post.id] || []).length > 0 ? (
                          commentsByPostId[post.id].map((comment) => (
                            <li key={comment.id} className={styles.commentItem}>
                              <Image
                                src={
                                  comment.user_photo
                                    ? `${process.env.NEXT_PUBLIC_IMG_URL}${comment.user_photo}.jpg`
                                    : "/icons/220.svg"
                                }
                                alt={`Foto de ${comment.user_name}`}
                                width={40}
                                height={40}
                                className={styles.avatar}
                                unoptimized
                              />
                              <div className={styles.commentContent}>
                                <span className={styles.commentUser}>@{comment.user_name}</span>
                                <p className={styles.commentText}>{comment.text_comment}</p>
                                <span className={styles.commentDate}>
                                  {new Date(comment.date_comment).toLocaleString("pt-BR")}
                                </span>
                              </div>
                            </li>
                          ))
                        ) : (
                          <li className={styles.commentItem}>
                            Ainda não há comentários
                          </li>
                        )}
                      </ul>
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
                  <span>{commentsByPostId[post.id]?.length ?? 0}</span>
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
      {showButton && (
        <button className={styles.buttonTop} onClick={scrollToTop}>
          Scroll Up
        </button>
      )}
    </div>
  );
}
