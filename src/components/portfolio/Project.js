import React, { useState, memo } from 'react'
import { getLanguageIcons } from '../../data/portfolioData'

const Project = memo(({ item }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { name, languages, source, info, picture } = item;
  const languageIcons = getLanguageIcons(languages);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="project">
      <div className="icons">
        {languageIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
      </div>
      <h3>{name}</h3>
      <img src={picture} alt={name} onClick={toggleInfo} />
      {showInfo && (
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{name}</h2>
              <div className="sourceCode">
                <a
                  href={source}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                >
                  Voir +
                </a>
              </div>
            </div>
            <p className="text">{info}</p>
            <div className="button return" onClick={toggleInfo}>
              Retour
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

Project.displayName = 'Project';

export default Project;
