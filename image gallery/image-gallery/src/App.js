
import React , {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav';
// import pageImage from './image/bg.jpg';
import PageCom from './components/PageCom';
import DarkMode from './components/DarkMode';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <TopNav title="ImageGallery" mode={mode} toggleMode={toggleMode}/>
    {/* <img src={pageImage} alt = "image"/> */}
    <PageCom/>
    </>
  );
}

export default App;
