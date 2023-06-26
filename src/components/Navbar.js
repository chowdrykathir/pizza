import React, { useState } from "react";
import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import "../styles/Navbar.css";

function Navbar(props) {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">Cart</Link>
          <Link to="/order">Order</Link>
       
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">Cart</Link>
        <Link to="/order">Order</Link>
        <button onClick={toggleNavbar}>
          <FaBars/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;