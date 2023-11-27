import React, { useState, useEffect } from 'react';
import './App.css';
import { animateScroll as scroll } from 'react-scroll';
import Header from './components/Header';
import Top from './components/Top';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

const scrollTop = () => {
  scroll.scrollToTop();
};

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Top />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      {showScrollButton && (
        <div className='top-button'>
          <ArrowCircleUpTwoToneIcon
            className='top-icon'
            onClick={scrollTop}
            sx={{ fontSize: 50 }}
          />
        </div>
      )}
    </>
  );
}

export default App;
