import React from 'react';
import { useNavigate } from "react-router-dom";

const VinylCard = ({albums}) => {
    let navigate = useNavigate();
    const goToDetails = () => {
        const id = albums.id;
        let path = `/details/${id}`;
        navigate(path);
        window.location.reload();
    }

    return (
        <div className='vinylCard'>
            <div className='cover-container'onClick={goToDetails}>
                <li>
                    <img src={albums.coverURL} alt={albums.title} className="cover" >
                    </img>
                </li>
            </div>
            <div className='vinyl-details-container'>
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

export default VinylCard;