import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import  language_icon  from '../assets/languages-icons/french.png';
import { CartSidebarData } from './CartSidebarData';


const PersonnalNavigation = () => {
     {/* variable pour masquer le panier par défaut */}
    const [cartSidebar, setCartSideBar] = useState(false)
     {/* variable pour changer l'état d'affichage du panier */}
    const showCartSidebar = () => setCartSideBar(!cartSidebar)

    return (
        <div className= "personnalNavigation">
             {/* menu personnel du header avec les liens pour se logger, afficher ses favoris, contacter les admins, afficher le panier, changer la langue */}
            <div className = "menu">
                <nav> 
                    <NavLink to="/login" className="iconWhite"><i className="fa-solid fa-user"></i></NavLink>
                    <NavLink to="/favorites" className="iconWhite"><i className="fa-solid fa-heart"></i></NavLink>
                    <NavLink to="#" className="iconWhite"><i className="fa-solid fa-cart-arrow-down" onClick={showCartSidebar}></i></NavLink>
                    <NavLink to="/contact" className="iconWhite"><i className="fa-solid fa-envelope"></i></NavLink>
                    <NavLink to="/LanguageSelection"><img src={language_icon} className="flagIcon" alt="french"></img></NavLink>
                </nav>
                 {/* attribut des classes differentes au panier pour l'afficher ou le masquer */}
                <nav className={cartSidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                         {/* bouton pour changer la classe du panier sur le click pour l'afficher/le masquer */}
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <i className="fa-solid fa-x" onClick={showCartSidebar}></i>
                            </Link>
                            
                        </li>
                         {/* récupere les infos du panier dans cartSidebarData et affiche le titre et le nom de l'auteur des elements du panier  */}
                        {CartSidebarData.map((item, index) => {
                            return (
                                <li key={index} className="toto">
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                        <span>{item.author}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PersonnalNavigation;