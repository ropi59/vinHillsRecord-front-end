import React from 'react';

const SearchCard = ({albums}) => {
    return (
        <div className='searchCard'>
             {/* carte d'affichage des albums dans la recherche, news, back in stock */}
            <div className='cover-container'>
                 {/* affichage de la pochette du vinyl */}
                <li>
                    <img src={albums.coverURL} alt={albums.title} className="searchCard-cover">
                    </img>
                </li>
            </div>
            <div className='details-container'>
                 {/* affichage des details de l'album (titre, auteur, genre)  */}
                <div className='listContainer'>
                    <li className='albumTitle'>{albums.title}</li>
                    <li className='details'>{albums.author}</li>
                    <li className='details'>{albums.genre}</li>
                </div>
                 {/* bouton pour ajouter au panier, a mettre en lien avec le back */}
                <div className='buttonContainer'>
                    <button className='addToCart'><i className="fa-solid fa-cart-arrow-down"></i></button>
                </div>
            </div>   
        </div>
    );
};

export default SearchCard;