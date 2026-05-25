import React, { memo } from 'react';

const ProgressBar = memo(({ className, title, languages, maxYears = 10 }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="years">
        <span>Expérience</span>
        <span>{Math.round(maxYears / 2)} ans</span>
        <span>{maxYears} ans</span>
      </div>
      <div>
        {languages.map((item) => {
          const progressBar = (item.xp / maxYears) * 100 + '%';
          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
