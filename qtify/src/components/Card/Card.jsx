import styles from './Card.module.css'
import Tooltip from '@mui/material/Tooltip';

export default function Card({cardData,type}){
    let chipData = "";
    let toolTipData = ""
    if(type === "album")
    {
        chipData = cardData.follows + "k Follows"
        toolTipData = cardData?.songs?.length + " songs"
    } else {
        chipData = cardData.likes + "k Likes"
        toolTipData = "Label : " + cardData?.genre?.label 
    }
    
    return <div className={styles.card}>
        <Tooltip arrow title={toolTipData} placement="top">
                <div>
                    <div className={styles.cardMain}>
                            <img className={styles.cardImg} src={cardData.image} alt={cardData.title + "album"} />
                            <div className={styles.cardPill}>{chipData}</div>
                    </div>
                    <div className={styles.cardFooter}>
                        <h3>{cardData.title}</h3>
                    </div>
                </div>
        </Tooltip>
    </div>
}