import React from "react";
import Navigation from "../components/Navigation";
import logo_black from "../assets/logo_black.png";
import { Link } from "react-router-dom";
import PersonnalNavigation from "../components/PersonnalNavigation";
import CartSidebar from "./../components/CartSidebar"

const header = () => {  
  {/* composant header de page*/}
  return (
    <div className="header">
      {/* affichage du logo avec lien vers la homepage*/}
        <div className="logoContainer">
            <Link to="/" className="nav-active">
            <img src={logo_black} alt="VinHills Records" className="logo" />
            </Link>
        </div>
        <div className="navigationContainer">
          {/* composant avec les liens de navigation et la barre de recherche*/}
            <Navigation />
        </div>
        <div className="personnalNavContainer">
          {/* composant avec les liens pour s'identifier, aller a la page contact, aller aux favoris, voir le panier, changer de langue*/}
            <PersonnalNavigation />
            {/* composant panier*/}
            <CartSidebar />
        </div>
    </div>
  );
};

export default header;
