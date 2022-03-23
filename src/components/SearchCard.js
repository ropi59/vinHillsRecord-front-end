import React from 'react';

const SearchCard = ({albums}) => {
    return (
        <div className='searchCard'>
            <div className='cover-container'>
                <li>
                    <img src={albums.coverURL} alt={albums.title} className="searchCard-cover">
                    </img>
                </li>
            </div>
            <div className='details-container'>
                <div className='listContainer'>
                    <li className='albumTitle'>{albums.title}</li>
                    <li className='details'>{albums.author}</li>
                    <li className='details'>{albums.genre}</li>
                </div>
                <div className='buttonContainer'>
                    <button className='addToCart'><i className="fa-solid fa-cart-arrow-down"></i></button>
                </div>
            </div>
            
        </div>
    );
};

export default SearchCard;