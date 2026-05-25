import React, { memo } from 'react'
import ProgressBar from './ProgressBar'

const LANGUAGES_DATA = [
  { id: 1, value: 'Javascript', xp: 1.3 },
  { id: 2, value: 'Css', xp: 1.4 },
  { id: 3, value: 'Php', xp: 0.2 },
  { id: 4, value: 'Python', xp: 0.1 },
];

const FRAMEWORKS_DATA = [
  { id: 1, value: 'Reactjs', xp: 1.35 },
  { id: 2, value: 'Vuejs', xp: 0.5 },
  { id: 3, value: 'Bootstrap', xp: 0.3 },
  { id: 4, value: 'material UI', xp: 0.5 },
];

const Languages = memo(() => {
  return (
    <div className="languagesFrameworks">
      <ProgressBar
        languages={LANGUAGES_DATA}
        className="languagesDisplay"
        title="languages"
        maxYears={2}
      />
      <ProgressBar
        languages={FRAMEWORKS_DATA}
        title="frameworks & bibliotheques"
        className="frameworksDisplay"
        maxYears={2}
      />
    </div>
  );
});

Languages.displayName = 'Languages';

export default Languages;
