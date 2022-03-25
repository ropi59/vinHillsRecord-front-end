import React from 'react';
import { NavLink } from "react-router-dom";

const SocialNetworks = () => {
    return (
        <div className="socialNetworks">
            {/* lien vers les pages perso sur les differents reseaux sociaux, a faire?*/}
            <div className = "menu">
                <nav> 
                    <a target="_blank" href="https://facebook.com/vinhills" className="iconBlack"><i className="fa-brands fa-facebook"></i></a>
                    <a target="_blank" href="https://instagram.com/vinhills" className="iconBlack"><i className="fa-brands fa-instagram"></i></a>
                    <a target="_blank" href="https://twitter.com/vinhills" className="iconBlack"><i className="fa-brands fa-twitter"></i></a>
                </nav>
            </div>
        </div>
    );
};

export default SocialNetworks;