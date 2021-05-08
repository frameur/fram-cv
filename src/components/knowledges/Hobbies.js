import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby"><i className="fas fa-bicycle fa-spin"></i><span>VTT</span></li>
                <li className="hobby"><i className="fas fa-paint-brush fa-spin"></i><span>Dessin</span></li>
                <li className="hobby"><i className="fas fa-camera-retro fa-spin"></i><span>Photographie</span></li>
                <li className="hobby"><i className="far fa-file-video fa-spin"></i><span>Cinéma</span></li>
                <li className="hobby"><i className="fas fa-atom fa-spin"></i><span>Physique quantique</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;