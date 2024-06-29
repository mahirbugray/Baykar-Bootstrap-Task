import '../src/scss/main.scss';
import bgWaves from "./assets/images/bgWaves.png"

import NavbarSection from './components/Navbar';
import PageSection1 from './components/Section1';
import PageSection2 from './components/Section2';
import PageSection3 from './components/Section3';
import PageSection4 from './components/Section4';
import PageSection5 from './components/Section5';
import PageSection6 from './components/Section6';
import PageSection7 from './components/Section7';
import FooterSection from './components/Footer';


import mainTriangle from './assets/images/mainTriangle.png'
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
        <NavbarSection />
        <PageSection1 />
        <PageSection2 />
        <div className='position-absolute bottom-0 z-n1 d-none d-lg-block'>
          <img className='vw-100' src={mainTriangle} alt="main-triangle" />
        </div>
      </div>
      <PageSection3 />
      <div className='position-relative z-1 '
        style={{
          background: isWideScreen ? " linear-gradient(#fffcf2, #fffefb)" : "white",
        }}>
        <PageSection4 />
        <PageSection5 />
        <PageSection6 />
        <div className='position-absolute bottom-0 z-n1 d-none d-lg-block'>
          <img className='vw-100' src={bgWaves} alt="bgWaves" />
        </div>
      </div>
      <PageSection7 />
      <FooterSection />
    </main>
  )
}

export default App
