import React from 'react';

const Top10Card = ({albums}) => {
    return (
        <div className='top10Card'>
            {/* composant carte du top10 */}
            <div className='coverContainer'>
                {/* affichage de la pochette de l'album*/}
                <li>
                    <img src={albums.coverURL} alt={albums.title} className='cover'>
                    </img>
                </li>
            </div>
            {/* affichage des infos de base de l'album (titre, auteur, genre)*/}
            <div className='infoContainer'>
                <li className='albumTitle'>{albums.title}</li>
                <li className='details'>{albums.author}</li>
                <li className='details'>{albums.genre}</li>
            </div>
            
        </div>
    );
};

export default Top10Card;