
import styles from './Button.module.css'

export default function Button({text}){
    return (
        <button className={styles.button} type={"button"}>Give Feedback</button>
    )
}