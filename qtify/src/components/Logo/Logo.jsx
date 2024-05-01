import logoImg from '../../assets/logo.png'
import styles from './Logo.module.css'

export default function Logo(){
    return <div className={styles.logoContainer}>
        <img src={logoImg} className={styles.logoImg} alt='LogoImg'/>
    </div>
}