
import styles from './SongSection.module.css'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function SongSection({data, title, type, genre}){
    
    const [collapse, setCollapse] = useState(true)
    const [songData, setSongData] = useState([]);
    const [value, setValue] = useState('all');
    useEffect(() => {
        setSongData(data)
    }, [data])
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === "all")
        setSongData(data);
        else
        setSongData(data.filter(item => item.genre.key === newValue))
    };

    return <div className={styles.song_section}>
        <div className={styles.song_section_Header}>
            <p className={styles.song_section_Title}>{title}</p>
            {type === "album" && <p className={styles.song_section_Btn} onClick={() => setCollapse(prev => !prev)}>Show All</p>}
        </div>

        {type === "song" && songData &&
        <Box sx={{ width: '100%', transform: 'translateY(-15px)' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="green"
                aria-label="secondary tabs example"
                textColor='inherit'
                sx={{ 
                    color: 'var(--white)',
                    '& .MuiTabs-indicator': {
                        color: 'var(--white)',
                        backgroundColor: 'var(--green)',
                    },
                 }}
            >
                <Tab value={"all"} label={"all"}/>
                {genre?.map(tab => <Tab key={tab.key} value={tab.key} label={tab.key}/>)}
            </Tabs>
        </Box>}
        

        {collapse ? 
            <Carousel data={songData} component={(song) => <Card cardData={song} type={type}/>}/> : 
            <div className={styles.cardWrapper}>
                {data && data.map(song => {
                    return <Card cardData={song} key={song.id} type={type}/>
                })}
            </div>
        }
    </div>
}