import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="logo de Wendy Baqué, auteure, lectrice et chroniqueuse"
            />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=massecritique">
            <h6>Masse Critique</h6>
          </Link>
          <Link className="link" to="/?cat=coupdecoeur">
            <h6>Coups de coeur</h6>
          </Link>
          <Link className="link" to="/?cat=feelgood">
            <h6>Feel-good</h6>
          </Link>
          <Link className="link" to="/?cat=romance">
            <h6>Romance</h6>
          </Link>
          <Link className="link" to="/?cat=thriller">
            <h6>Thriller</h6>
          </Link>
          <Link className="link" to="/?cat=divers">
            <h6>Divers</h6>
          </Link>
          <span>Wendy</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write" className="link">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
