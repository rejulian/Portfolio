import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
