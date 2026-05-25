import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navigation profileImage="./media/francois4.jpg"/>
            <ProjectList/>
           
        </div>
    );
};

export default Portfolio;