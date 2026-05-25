import React, { memo } from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = memo(() => {
  return (
    <div className="portfolio">
      <Navigation profileImage="./media/francois4.jpg" />
      <ProjectList />
    </div>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;