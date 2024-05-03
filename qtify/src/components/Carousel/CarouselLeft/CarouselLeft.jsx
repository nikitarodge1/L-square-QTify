import { useEffect, useState } from "react";
import { ReactComponent as LeftIcon } from "../../../assets/LeftArrow.svg";
import styles from '../Carousel.module.css'
import { useSwiper } from "swiper/react";

export default function CarouselLeft(){
    const swiper = useSwiper();
    const [beg,setBeg] = useState(true);

    useEffect(() => {
        swiper.on("slideChange",() => {
            setBeg(swiper.isBeginning)
        })
    },[swiper])
    
   

    return <div className={styles.leftIcon} >
        {!beg && <LeftIcon onClick={() => swiper.slidePrev()}/>}
    </div>
}
