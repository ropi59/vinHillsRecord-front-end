import React from 'react';
import VinylsHorizontalBanner from './VinylsHorizontalBanner';

const DetailsCard = ({album}) => {
    const ourSelection = "ourSelection"

    return (
        <div className='detailsCard'>
            <div className='presentation-content'>
                    <div className='cover-container'>
                        <img src={album.coverURL} alt={album.title} className="cover"></img>
                    </div>
                    <div className='description-container'>
                        <h3>{album.title}</h3>
                        <h4>{album.author}</h4>
                        <p>{album.description}</p>
                    </div>
                    <div className='buyIt-container'>
                        <div className='buyIt-header'>
                            <h1>{album.format}</h1>
                            <h1>{album.price}&euro;</h1>
                            <hr/>
                        </div>
                        <div className='buyIt-content'>
                            <p>Label: {album.label}</p>
                            <p>Genre: {album.genre}</p>
                            <p>Release date: {album.released}</p>
                            <button className='buyIt-button'>ADD TO CART</button>
                        </div>
                    </div>
            </div>
            <div className='suggestions-content'>
                <hr className='separator'/>
                <h1>Our recommendations</h1>
                <VinylsHorizontalBanner dbPath={ourSelection}/>
            </div>
        </div>
    );
};

export default DetailsCard;