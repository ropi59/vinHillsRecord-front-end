import React from 'react';
import VinylsHorizontalBanner from './VinylsHorizontalBanner';

const DetailsCard = ({album}) => {
    {/* partie du chemin à utiliser lors de l'appel a la bdd.
sera modifié avec le back*/}
    const ourSelection = "ourSelection"

    return (
        <div className='detailsCard'>
            <div className='presentation-content'>
                {/* image de la pochette de l'album*/}
                    <div className='cover-container'>
                        <img src={album.coverURL} alt={album.title} className="cover"></img>
                    </div>
                    {/* informations principales de l'album*/}
                    <div className='description-container'>
                        <h3>{album.title}</h3>
                        <h4>{album.author}</h4>
                        <p>{album.description}</p>
                    </div>
                    {/* case de selection du format (33 ou 45 tours) avec le prix*/}
                    <div className='buyIt-container'>
                        <div className='buyIt-header'>
                            <h1>{album.format}</h1>
                            <h1>{album.price}&euro;</h1>
                            <hr/>
                        </div>
                        {/* informations secondaires de l'album */}
                        <div className='buyIt-content'>
                            <p>Label: {album.label}</p>
                            <p>Genre: {album.genre}</p>
                            <p>Release date: {album.released}</p>
                            {/* bouton pour ajouter au panier, ajouter la methode pour communiquer avec le back */}
                            <button className='buyIt-button'>ADD TO CART</button>
                        </div>
                    </div>
            </div>
            {/* affichage de suggestions en rapport avec le vinyl affiché ( au hasard par genre? )*/}
            <div className='suggestions-content'>
                <hr className='separator'/>
                <h1>Our recommendations</h1>
                {/* utilisation du path précisé en haut. doit etre modifié lorsque le back sera ok */}
                <VinylsHorizontalBanner dbPath={ourSelection}/>
            </div>
        </div>
    );
};

export default DetailsCard;