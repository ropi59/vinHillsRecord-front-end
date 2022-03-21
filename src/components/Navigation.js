import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
        <div className = "menu">
            <nav> 
                <NavLink to="/news" className={({isActive}) => (isActive ? 'nav-active' : 'nav-inactive')}> News  </NavLink>
                <NavLink to="/back-in-stock" className={({isActive}) => (isActive ? 'nav-active' : 'nav-inactive')}> Back in stock </NavLink>
                <i className="fa-solid fa-magnifying-glass"></i><input type = "search" placeholder= 'Search' ></input>
            </nav>
        </div>
    </div>
  );
};

export default Navigation;
