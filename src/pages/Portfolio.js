import React from 'react';
import Navigation from '../components/Navigation2';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navigation/>
            <ProjectList/>
           
        </div>
    );
};

export default Portfolio;