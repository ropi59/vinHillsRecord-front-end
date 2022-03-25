import React from "react";
import logo_white from "../assets/logo_white.png";
import { Link } from "react-router-dom";
import SocialNetworks from "../components/SocialNetworks";
import FooterLinks from "../components/FooterLinks";

const footer = () => {
  {/* composant footer de page*/}
  return (
    <div className="footerContainer">
    <div className="footer">
      {/* logo avec lien vers la homepage*/}
        <div className="logoContainer">
            <Link to="/" className="nav-active">
            <img src={logo_white} alt="VinHills Records" className="logo" />
            </Link>
        </div>
        <div className="linksContainer">
          {/* liens vers les pages contact, terms, privacy...*/}
           <FooterLinks />
        </div>
        <div className="socialNetworksContainer">
          {/* liens vers les pages sur les reseaux sociaux*/}
            <SocialNetworks />
        </div>
        
    </div>
    <span>Copyright © 2022 by Vinhills Records. All right reserved </span>
    </div>
  );
};

export default footer;