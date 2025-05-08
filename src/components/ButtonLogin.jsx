import styles from "../styles/Button.module.css"

export default function Button({props, action}){
    return(
    <button onClick={action} className={styles.button}>{props}</button>
    )
}