import { useState } from "react";
import styles from "../styles/AddUser.module.css";
import Image from "next/image";

export default function AddUser() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className={styles.addUserRight}>
            <div className={styles.container} onClick={openModal}>
                <Image
                    src="/icons/addUser.png"
                    alt="Add User"
                    width={30}
                    height={30}
                    className={styles.image}
                />
            </div>

            {showModal && ( 
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>×</button>
                        <h2>Adicionar Contato</h2>
<form className={styles.searchForm}>
    <div style={{ display: "flex", alignItems: "center" }}>
        <input className={styles.input} type="text" placeholder="Pesquisar por um username" />
        <Image
            src="/icons/lupa.png"
            alt="Pesquisar"
            width={20}
            height={20}
            style={{ marginLeft: 8, cursor: "pointer" }}
        />
    </div>
   <div className={styles.modalActions}>
  <button type="submit" className={styles.button}>Fechar</button>
</div>
</form>

                    </div>
                </div>
            )}
        </div>
    );
}
