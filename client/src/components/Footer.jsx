import React from "react";
import logo from "../assets/logosans.png";

const Footer = () => {
  return (
    <footer>
      <img
        src={logo}
        alt="logo de Wendy Baqué, auteure, lectrice et chroniqueuse"
      />
      <span>Made with ❤	 and React.js <b>by Wendy Baqué</b></span>
    </footer>
  );
};

export default Footer;
