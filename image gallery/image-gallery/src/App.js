
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav';
// import pageImage from './image/bg.jpg';
import PageCom from './components/PageCom';

function App() {
  return (
    <>
    <TopNav/>
    {/* <img src={pageImage} alt = "image"/> */}
    <PageCom/>
    </>
  );
}

export default App;
