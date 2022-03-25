import React from 'react';
import yellow_vinyl from "./../assets/yellow_vinyl_icon.png"

const Members = ({members}) => {
    
    return (
        <div className='members'>
            {/* composant pour afficher les membres de l'équipe dans la page about us */}
            <div className='left-part'>
                 {/* affiche la photo du membre */}
                <div className='picture'>
                    <img src={members.portraitURL} alt={members.name} className='portraitPic'></img>
                </div>
                 {/* affiche la description du membre ( nom, poste, texte de presentation) */}
                <div className='memberDescription'>
                    <h3>{members.name}: {members.role}</h3>
                    <p>{members.description}</p>
                </div>
            </div>
            <div className='right-part'>
                 {/* lien vers la selection de titre/albums du membre de l'équipe */}
                <div className='buttonDiv'>
                    <button className='playlist'>{members.selectionButtonContent}</button>
                </div>
                <div className="iconDiv">
                    <img src={yellow_vinyl} className="iconContainer" alt="link to playlist"></img>
                </div>
            </div>
            
        </div>
    );
};

export default Members;