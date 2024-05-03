import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react'
import axios from 'axios'
import theme from './theme'
import './App.css';
import SongSection from './components/SongSection/SongSection';

function App() {
  const [topSongs,setTopSongs] = useState([])
  const [newSongs,setNewSongs] = useState([])
  const [songs,setSongs] = useState([])
  const [genre,setGenre] = useState([])
  useEffect(() => {
    async function fetchTopAlbums(){
        try{
            let res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
            setTopSongs(res.data)
        }catch(err){
            alert(err);
        }
    }
    async function fetchNewAlbums(){
      try{
          let res = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
          setNewSongs(res.data)
      }catch(err){
          alert(err);
      }
    }
    async function fetchSongs(){
      try{
          let res = await axios.get('https://qtify-backend-labs.crio.do/songs');
          setSongs(res.data)
      }catch(err){
          alert(err);
      }
    }
    async function fetchGenre(){
      try{
          let res = await axios.get('https://qtify-backend-labs.crio.do/genres');
          setGenre(res.data.data)
      }catch(err){
          alert(err);
      }
    }
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchGenre();
},[])


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Hero />
        <SongSection data={topSongs} title="Top Albums" type="album"/>
        <SongSection data={newSongs} title="New Albums" type="album"/>
        <div className='divider'></div>
        <SongSection data={songs} title="Songs" type="song" genre={genre}/>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
