import React, { memo } from 'react'
import { getLanguageIcons } from '../../data/portfolioData'

const Project = memo(({ item }) => {
  const { name, languages, source, picture } = item;
  const languageIcons = getLanguageIcons(languages);

  return (
    <div className="project">
      <div className="icons">
        {languageIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
      </div>
      <h3>{name}</h3>
      <img src={picture} alt={name} />
      <a href={source} target="_blank" rel="noopener noreferrer" className="viewButton">
        Voir le projet
      </a>
    </div>
  );
});

Project.displayName = 'Project';

export default Project;
