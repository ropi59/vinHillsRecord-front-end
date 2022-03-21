import React from 'react';

const Details = ({album}) => {
    return (
        <div className='details'>
            <div className='presentation-content'>
                <div className='cover-container'>
                    <img src={album.coverURL} alt={album.title} className="cover"></img>
                </div>
                <div className='descritpion-container'>
                    <h3>{album.title}</h3>
                    <h5>{album.author}</h5>
                    <p>{album.description}</p>
                </div>
                <div className='buyIt-container'>

                </div>

            </div>
            
        </div>
    );
};

export default Details;