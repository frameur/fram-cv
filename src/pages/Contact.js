import React from 'react';
import Navigation from '../components/Navigation3';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        
    <div className='contact'>
            <Navigation/>
        <div className='contactContent'>
               <div className="header"></div>
               <div className="contactBox">
                   <h1>Contactez-moi</h1>
                   <ul>
                       <li >
                           <i className="fas fa-map-marker-alt"></i>
                           <span>Vendée</span>
                       </li>
                       <li>
                           <i className="fas fa-mobile-alt"></i>
                           <CopyToClipboard text="0642844284">
                               <span className="clickInput" onClick={() => { alert('Téléphone copié !');}}>07 86 88 73 44</span>
                           </CopyToClipboard>
                       </li>
                       <li>
                           <i className="fas fa-envelope"></i>
                           <CopyToClipboard text="francoisramos6121@gmail.com">
                               <span className="clickInput" onClick={() => { alert('E-mail copié !');}}>francoisramos6121@gmail.com</span>
                           </CopyToClipboard>
                       </li>
                   </ul>
               </div>
          <div className="socialNetwork">
             <ul>
                <a href="https://fr.linkedin.com/" target="blank" rel="noopener noreferrer">
                    <h4>Linkedin</h4>
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/" target="blank" rel="noopener noreferrer">
                    <h4>Github</h4>
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/?lang=fr"target="blank"rel="noopenernoreferrer">
                    <h4>Twitter</h4>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://codepen.io/" target="blank" rel="noopener noreferrer">
                    <h4>CodePen</h4>
                    <i className="fab fa-codepen"></i>
                </a>
             </ul>   
          </div>
        </div>
    </div>
    );
};

export default Contact;