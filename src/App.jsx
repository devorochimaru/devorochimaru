import React, { useState, useEffect } from 'react';
import { priceData } from './data/panelData.js'; // .js is correct here because this file has no JSX

// Import all the components with the CORRECT .jsx extension
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import PanelsList from './components/PanelsList.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import PriceModal from './components/PriceModal.jsx';

function App() {
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const handleModalTrigger = (event) => {
      const button = event.target.closest('[data-bs-target="#priceModal"]');
      if (button) {
        const panelCard = button.closest('.card');
        if (panelCard) {
          const panelTitle = panelCard.querySelector('h5').textContent;
          const panelId = getPanelIdByTitle(panelTitle);
          if (panelId) {
            setModalContent(priceData[panelId]);
          }
        }
      }
    };
    
    const getPanelIdByTitle = (title) => {
        const panelMap = {
            'Customize panel & project': 'internal',
            'Internal Max+': 'max',
            'Premium Panel': 'premium',
            'Basic Panel': 'basic',
            'Aim Silent': 'silent',
            'Aimkill': 'aimkill',
            'Streamer Panel': 'streamer',
            'Training Course': 'crack',
            'Contact Dev': 'contact',
        };
        return panelMap[title];
    };

    document.addEventListener('click', handleModalTrigger);

    return () => {
      document.removeEventListener('click', handleModalTrigger);
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <Header />
      <div className="container">
        <Intro />
        <PanelsList />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
      <Footer />
      
      <PriceModal data={modalContent} />
    </>
  );
}

export default App;