import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="footerLinks">
      {/* liens vers les pages contact, about us privacy et terms dans le footer */}
        <div className = "menu">
            <nav>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About us</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
            </nav>
        </div>
    </div>
  );
};

export default FooterLinks;