import React, { memo } from 'react'

const SKILLS_GROUPS = [
  ['Github', 'MongoDb', 'MySql'],
  ['Photoshop', 'Indesign', 'Illustrator', 'After effect'],
  ['Blender', '3dsmax', 'Suite Office', 'Anglais / Portugais'],
];

const OtherSkills = memo(() => {
  return (
    <div className="otherSkills">
      <h3>Autres Compétences</h3>
      <div className="list">
        {SKILLS_GROUPS.map((group, groupIndex) => (
          <ul key={groupIndex}>
            {group.map((skill) => (
              <li key={skill}>
                <i className="fas fa-check-square"></i> {skill}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
});

OtherSkills.displayName = 'OtherSkills';

export default OtherSkills;
