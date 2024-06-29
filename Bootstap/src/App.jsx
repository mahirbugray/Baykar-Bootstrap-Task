import '../src/scss/main.scss';
import bgWaves from "./assets/images/bg-waves.png"

import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Footer from './components/Footer';


import mainTriangle from './assets/images/main-triangle.png'
import { useEffect, useState } from 'react';
function App() {
  const [isWideScreen, setIsWideScreen] = useState(true);

  const handleResize = () => {
    const isWideScreen = window.innerWidth >= 992;
    setIsWideScreen(isWideScreen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main className='overflow-hidden'>
      <div className='position-relative z-1'
        style={{
          background: isWideScreen ? " linear-gradient(#fffbeb, #fffbef)" : "white",
        }}>
        <Navbar />
        <Section1 />
        <Section2 />
        <div className='position-absolute bottom-0 z-n1 d-none d-lg-block'>
          <img className='vw-100' src={mainTriangle} alt="main-triangle" />
        </div>
      </div>
      <Section3 />
      <div className='position-relative z-1 '
        style={{
          background: isWideScreen ? " linear-gradient(#fffcf2, #fffefb)" : "white",
        }}>
        <Section4 />
        <Section5 />
        <Section6 />
        <div className='position-absolute bottom-0 z-n1 d-none d-lg-block'>
          <img className='vw-100' src={bgWaves} alt="bgWaves" />
        </div>
      </div>
      <Section7 />
      <Footer />
    </main>
  )
}

export default App
