import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Hero/>
      </div>
    </ThemeProvider>
  );
}

export default App;


