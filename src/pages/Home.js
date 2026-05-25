import React, { memo } from 'react'
import Navigation from '../components/Navigation'

const Home = memo(() => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>François RAMOS</h1>
          <h2>Développeur Web</h2>
          <div className="pdf">
            <a href="./media/cvfram01.pdf" target="_blank" rel="noopener noreferrer">
              <div className="imgCv"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home
