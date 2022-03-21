import React from 'react';
import { NavLink } from "react-router-dom";

const SocialNetworks = () => {
    return (
        <div className="socialNetworks">
            <div className = "menu">
                <nav> 
                    <a target="_blank" href="https://facebook.com" className="iconBlack"><i className="fa-brands fa-facebook"></i></a>
                    <a target="_blank" href="https://instagram.com" className="iconBlack"><i className="fa-brands fa-instagram"></i></a>
                    <a target="_blank" href="https://twitter.com" className="iconBlack"><i className="fa-brands fa-twitter"></i></a>
                </nav>
            </div>
        </div>
    );
};

export default SocialNetworks;