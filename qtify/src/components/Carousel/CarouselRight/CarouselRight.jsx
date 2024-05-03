import { useEffect, useState } from "react";
import { ReactComponent as RightIcon } from "../../../assets/RightArrow.svg";
import styles from '../Carousel.module.css'
import { useSwiper } from "swiper/react";


export default function CarouselLeft(){
    const swiper = useSwiper();
    const [end,setEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange",() => {
            setEnd(swiper.isEnd)
        })
    },[swiper])
   

    return <div className={styles.rightIcon} >
        {!end && <RightIcon onClick={() => swiper.slideNext()}/>}
    </div>
}