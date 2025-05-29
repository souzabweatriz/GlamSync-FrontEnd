import React from "react";
import styles from "./Shoes.module.css"
import Header from "../../components/Header"

export default function Shoes(){
    return(
        <div className={styles.container}>
            <Header 
                    ImageProps={{
                        src: "/flower.png",
                        alt: "icon de voltar",
                        width: 50,
                        height: 50,
                    }}
                
            />
        </div>
    )
}