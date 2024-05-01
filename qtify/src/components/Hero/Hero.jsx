import styles from './Hero.module.css'
import HeroHeadPhones from '../../assets/hero_headphones.png'

export default function Hero(){
    return <section className={styles.heroSection}>
        <h4 className={styles.heroTitle}>100 Thousand Songs, ad-free <br /> Over thousands podcast episodes</h4>
        <img className={styles.heroHeadPhone} src={HeroHeadPhones} alt="headphones-img" />
    </section>
}