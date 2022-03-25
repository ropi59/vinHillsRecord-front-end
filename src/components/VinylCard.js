import React from 'react';
import { useNavigate } from "react-router-dom";

const VinylCard = ({albums}) => {
    {/* affectation de la fonction usenavigate a la variable navigate*/}
    let navigate = useNavigate();
    {/* fonction pour aller a la page de détails d'un album en cliquand dessus */}
    const goToDetails = () => {
        {/* recuperation de l'id de l'album*/}
        const id = albums.id;
        {/* ajout de l'id au chemin où aller*/}
        let path = `/details/${id}`;
        {/* changer de page vers le chemin details/id de l'album*/}
        navigate(path);
        {/* recharger la page pour actualiser les infos si on est deja sur la page de détails et qu'on clique dans les suggestions */}
        window.location.reload();
    }

    return (
        <div className='vinylCard'>
            {/* carte de présentation du vinyl, au clique on accede a la page détail*/}
            <div className='cover-container'onClick={goToDetails}>
                {/* affichage de la pochette de l'album */}
                <li>
                    <img src={albums.coverURL} alt={albums.title} className="cover" >
                    </img>
                </li>
            </div>
            <div className='vinyl-details-container'>
                {/* affichage des informations de base de l'album (titre, auteur, genre) */}
                <div className='listContainer'>
                    <li className='albumTitle'>{albums.title}</li>
                    <li className='details'>{albums.author}</li>
                    <li className='details'>{albums.genre}</li>
                </div>
                <div className='buttonContainer'>
                    {/* bouton pour ajouter au panier, a mettre en place avec le back */}
                    <button className='addToCart'><i className="fa-solid fa-cart-arrow-down"></i></button>
                </div>
            </div>
            
        </div>
    );
};

export default VinylCard;