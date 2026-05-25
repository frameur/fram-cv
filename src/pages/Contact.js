import React, { useState, memo } from 'react'
import Navigation from '../components/Navigation'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const SOCIAL_LINKS = [
  { id: 1, url: 'https://www.linkedin.com/in/fran%C3%A7ois-ramos-b5a76a216/', label: 'Linkedin', icon: 'fab fa-linkedin' },
  { id: 2, url: 'https://github.com/frameur', label: 'Github', icon: 'fab fa-github' },
  { id: 3, url: 'https://twitter.com', label: 'Twitter', icon: 'fab fa-twitter' },
  { id: 4, url: 'https://codepen.io/frameur', label: 'CodePen', icon: 'fab fa-codepen' },
];

const Contact = memo(() => {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (type) => {
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="contact">
      <Navigation profileImage="./media/tetefrancois.jpg" />

      <div className="contactContent">
        <div className="header"></div>

        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="">
                <img
                  className="imgContact"
                  src="./media/address.png"
                  alt="Adresse"
                />
              </i>
              <span>85170 BELLEVIGNY</span>
            </li>
            <li>
              <i className="">
                <img
                  className="imgContact"
                  src="./media/smartphone.png"
                  alt="Téléphone"
                />
              </i>
              <CopyToClipboard text="0764284284" onCopy={() => handleCopy('phone')}>
                <span className="clickInput">
                  {copiedType === 'phone' ? '✓ Copié!' : '07 64 28 42 84'}
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="">
                <img
                  className="imgContact"
                  src="./media/email.png"
                  alt="Email"
                />
              </i>
              <CopyToClipboard text="francoisramos6121@gmail.com" onCopy={() => handleCopy('email')}>
                <span className="clickInput">
                  {copiedType === 'email' ? '✓ Copié!' : 'francoisramos6121@gmail.com'}
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <h4>{link.label}</h4>
                <i className={link.icon}></i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
