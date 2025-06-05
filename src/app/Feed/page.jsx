import styles from "./feed.module.css";
import Image from "next/image";
import PageFeed from "../../components/PageFeed";
import { Carousel } from 'antd';
import Post from "../../components/Post"
import Link from "next/link";

export default function PrincipalFeed() {
    const contentStyle = {
        margin: 0,
        height: '20rem',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.image}>
                    <Image src="/Logo.png" alt="Logo GlamSync" width={300} height={300} />
                </div>
              <div className={styles.section}>
  <Link href="/home">
    <Image
      src="/icons/home.png"
      alt="ícone de casa marrom"
      width={35}
      height={35}
      className={styles.iconsContainer}
    />
  </Link>
  <Link href="/adicionar">
    <Image
      src="/icons/iconAdicionar.png"
      alt="ícone de Adicionar marrom"
      width={35}
      height={35}
      className={styles.iconsContainer}
    />
  </Link>
  <Link href="/messages">
    <Image
      src="/icons/iconChat.png"
      alt="ícone de Chat marrom"
      width={35}
      height={35}
      className={styles.iconsContainer}
    />
  </Link>
  <Link href="/profile">
    <Image
      src="/icons/users.png"
      alt="ícone de Usuário marrom"
      width={35}
      height={35}
      className={styles.iconsContainer}
    />
  </Link>
  <Link href="/notificacoes">
    <Image
      src="/icons/iconSino.png"
      alt="ícone de Sino marrom"
      width={35}
      height={35}
      className={styles.iconsContainer}
    />
  </Link>
</div>
            </div>
            <PageFeed />
            <div className={styles.carousel}>
                <Carousel autoplay autoplaySpeed={2000}>
                    <div>
                        <h3>
                            <Image
                                src="/posters/poster1.png"
                                alt="Poster com conteúdos do Site"
                                width={960}
                                height={320}
                            />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image
                                src="/posters/poster2.png"
                                alt="Poster com conteúdos do Site"
                                width={960}
                                height={320}
                            />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image
                                src="/posters/poster3.png"
                                alt="Poster com conteúdos do Site"
                                width={960}
                                height={320}
                            />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image
                                src="/posters/poster4.jpg"
                                alt="Poster com conteúdos do Site"
                                width={960}
                                height={320}
                            />
                        </h3>
                    </div>
                </Carousel>
            </div>
            <Post title={"Feed"} rota={`${process.env.NEXT_PUBLIC_API_URL}posts`} />
        </div>
    )
}
