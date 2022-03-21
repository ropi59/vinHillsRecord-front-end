import React from 'react';

const Top10Card = ({albums}) => {
    return (
        <div className='top10Card'>
            <div className='coverContainer'>
                <li>
                    <img src={albums.coverURL} alt={albums.title} className='cover'>
                    </img>
                </li>
            </div>
            <div className='infoContainer'>
                <li className='albumTitle'>{albums.title}</li>
                <li className='details'>{albums.author}</li>
                <li className='details'>{albums.genre}</li>
            </div>
            
        </div>
    );
};

export default Top10Card;