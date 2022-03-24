import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import  language_icon  from '../assets/languages-icons/french.png';
import { CartSidebarData } from './CartSidebarData';


const PersonnalNavigation = () => {
    const [cartSidebar, setCartSideBar] = useState(false)
    const showCartSidebar = () => setCartSideBar(!cartSidebar)

    return (
        <div className= "personnalNavigation">
            <div className = "menu">
                <nav> 
                    <NavLink to="/login" className="iconWhite"><i className="fa-solid fa-user"></i></NavLink>
                    <NavLink to="/favorites" className="iconWhite"><i className="fa-solid fa-heart"></i></NavLink>
                    <NavLink to="#" className="iconWhite"><i className="fa-solid fa-cart-arrow-down" onClick={showCartSidebar}></i></NavLink>
                    <NavLink to="/contact" className="iconWhite"><i className="fa-solid fa-envelope"></i></NavLink>
                    <NavLink to="/LanguageSelection"><img src={language_icon} className="flagIcon" alt="french"></img></NavLink>
                </nav>
                <nav className={cartSidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <i className="fa-solid fa-x" onClick={showCartSidebar}></i>
                            </Link>
                            
                        </li>
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