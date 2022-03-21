import React from "react";
import Navigation from "../components/Navigation";
import logo_black from "../assets/logo_black.png";
import { Link } from "react-router-dom";
import PersonnalNavigation from "../components/PersonnalNavigation";

const header = () => {  
  return (
    <div className="header">
        <div className="logoContainer">
            <Link to="/" className="nav-active">
            <img src={logo_black} alt="VinHills Records" className="logo" />
            </Link>
        </div>
        <div className="navigationContainer">
            <Navigation />
        </div>
        <div className="personnalNavContainer">
            <PersonnalNavigation />
        </div>
    </div>
  );
};

export default header;
