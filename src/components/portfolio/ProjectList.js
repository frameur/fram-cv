import React, { useState } from 'react'
import { portfolioData } from '../../data/portfolioData'
import Project from './Project'

const FILTER_OPTIONS = [
  { id: 1, value: 'javascript' },
  { id: 2, value: 'css' },
  { id: 3, value: 'reactjs' },
  { id: 4, value: 'vuejs' },
  { id: 5, value: 'mysql' },
  { id: 6, value: 'mongodb' },
  { id: 7, value: 'sketchbook' },
];

const ProjectList = () => {
  const [selectedRadio, setSelectedRadio] = useState('css');

  const handleRadio = (event) => {
    setSelectedRadio(event.target.value);
  };

  const filteredProjects = portfolioData.filter((item) =>
    item.languages.includes(selectedRadio)
  );

  return (
    <div className="portfolioContent">
      <ul className="radioDisplay">
        {FILTER_OPTIONS.map((radio) => (
          <li key={radio.id}>
            <input
              type="radio"
              name="radio"
              checked={radio.value === selectedRadio}
              value={radio.value}
              id={radio.value}
              onChange={handleRadio}
            />
            <label htmlFor={radio.value}>{radio.value}</label>
          </li>
        ))}
      </ul>
      <div className="projects">
        {filteredProjects.map((item) => (
          <Project key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
