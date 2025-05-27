import styles from "./feed.module.css";
import Image from "next/image";
import PageFeed from "../../components/PageFeed";
import { Carousel } from 'antd';
import Post from "../../components/Post"

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
            <Image src="/fundofeed.png" alt="imagem de fundo" width={2000} height={500} />
            <div className={styles.main}>
                <div className={styles.image}>
                    <Image src="/Logo.png" alt="Logo GlamSync" width={300} height={300} />
                </div>
                <div className={styles.section}>
                    <Image
                        src="/icons/home.png"
                        alt="ícone de casa marrom"
                        width={23}
                        height={23}
                        className={styles.iconsContainer}
                    />
                    <Image
                        src="/icons/iconAdicionar.png"
                        alt="ícone de Adicionar marrom"
                        width={24}
                        height={24}
                        className={styles.iconsContainer}
                    />
                    <Image
                        src="/icons/iconChat.png"
                        alt="ícone de Chat marrom"
                        width={24}
                        height={24}
                        className={styles.iconsContainer}
                    />
                    <Image
                        src="/icons/users.png"
                        alt="ícone de Usuário marrom"
                        width={24}
                        height={24}
                        className={styles.iconsContainer}
                    />
                    <Image
                        src="/icons/iconSino.png"
                        alt="ícone de Sino marrom"
                        width={24}
                        height={24}
                        className={styles.iconsContainer}
                    />
                </div>
            </div>
            <PageFeed />
            <div className={styles.carousel}>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>
                            <Image
                                src="/carousel.png"
                                alt="Svg para imagens não carregadas"
                                width={960}
                                height={320}
                            />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <Image
                                src="/carousel.png"
                                alt="Svg para imagens não carregadas"
                                width={960}
                                height={320}
                            />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <Image
                                src="/carousel.png"
                                alt="Svg para imagens não carregadas"
                                width={960}
                                height={320}
                            />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <Image
                                src="/carousel.png"
                                alt="Svg para imagens não carregadas"
                                width={960}
                                height={320}
                            />
                        </h3>
                    </div>
                </Carousel>
            </div>
            <Post />
        </div>
    )
}
