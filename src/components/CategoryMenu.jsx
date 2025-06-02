import Image from 'next/image';
import styles from '../styles/categoryMenu.module.css';

const categories = [
    { icon: "/icons/dress.png", label: "Dresses" },
    { icon: "/icons/hat.png", label: "Hat" },
    { icon: "/icons/shoes.png", label: "Shoes" },
    { icon: "/icons/makeup.png", label: "Make Up" },
    { icon: "/icons/jewelry.png", label: "Jewelry" },
];

export default function CategoryMenu() {
    return (
        <div className={styles.categories}>
            {categories.map((cat, index) => (
                <div className={styles.categoryItem} key={index}>
                    <Image src={cat.icon} alt={cat.label} width={24} height={24} />
                    <span>{cat.label}</span>
                </div>
            ))}
        </div>
    );
}