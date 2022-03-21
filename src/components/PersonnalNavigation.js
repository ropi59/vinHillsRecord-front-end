import React from 'react';
import { NavLink } from "react-router-dom";
import  language_icon  from '../assets/languages-icons/french.png';


const PersonnalNavigation = () => {
    return (
        <div className= "personnalNavigation">
            <div className = "menu">
                <nav> 
                    <NavLink to="/login" className="iconWhite"><i className="fa-solid fa-user"></i></NavLink>
                    <NavLink to="/favorites" className="iconWhite"><i className="fa-solid fa-heart"></i></NavLink>
                    <NavLink to="" className="iconWhite"><i className="fa-solid fa-cart-arrow-down"></i></NavLink>
                    <NavLink to="/contact" className="iconWhite"><i className="fa-solid fa-envelope"></i></NavLink>
                    <NavLink to="/LanguageSelection"><img src={language_icon} className="flagIcon" alt="Language selection"></img></NavLink>
                </nav>
            </div>
        </div>
    );
};

export default PersonnalNavigation;