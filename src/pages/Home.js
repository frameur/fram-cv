import React from 'react'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>François RAMOS</h1>
          <h2>Développeur Web</h2>
          <div className="pdf">
            <a href="./media/cvfram01.pdf" target="_blank">
              <div className="imgCv"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
