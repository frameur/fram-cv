import React, { memo } from 'react'

const HOBBIES_LIST = [
  { icon: 'fas fa-bicycle fa-spin', label: 'VTT' },
  { icon: 'fas fa-paint-brush fa-spin', label: 'Dessin' },
  { icon: 'fas fa-camera-retro fa-spin', label: 'Photographie' },
  { icon: 'far fa-file-video fa-spin', label: 'Cinéma' },
  { icon: 'fas fa-atom fa-spin', label: 'Physique quantique' },
];

const Hobbies = memo(() => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        {HOBBIES_LIST.map((hobby) => (
          <li key={hobby.label} className="hobby">
            <i className={hobby.icon}></i>
            <span>{hobby.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

Hobbies.displayName = 'Hobbies';

export default Hobbies;
