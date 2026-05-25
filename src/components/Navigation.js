import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const SOCIAL_LINKS = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/fran%C3%A7ois-ramos-b5a76a216/',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
  },
  {
    id: 2,
    url: 'https://github.com/frameur',
    icon: 'fab fa-github',
    label: 'GitHub',
  },
  {
    id: 3,
    url: 'https://twitter.com',
    icon: 'fab fa-twitter',
    label: 'Twitter',
  },
  {
    id: 4,
    url: 'https://codepen.io/frameur',
    icon: 'fab fa-codepen',
    label: 'CodePen',
  },
];

const NAVIGATION_ITEMS = [
  {
    id: 1,
    to: '/',
    icon: './media/house.png',
    label: 'Accueil',
  },
  {
    id: 2,
    to: '/competences',
    icon: './media/soft-skills.png',
    label: 'Compétences',
  },
  {
    id: 3,
    to: '/portfolio',
    icon: './media/portfolio.png',
    label: 'Portfolio',
  },
  {
    id: 4,
    to: '/contact',
    icon: './media/communicate.png',
    label: 'Contact',
  },
];

const Navigation = memo(({ profileImage = './media/francois2.jpg' }) => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={profileImage} alt="François RAMOS - Profil" />
          <h3>François RAMOS</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink exact to={item.to} activeClassName="navActive">
                <i className="">
                  <img className="imgIcon" src={item.icon} alt="" />
                </i>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <div className="signature">
          <p>© François | 2021 - {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
