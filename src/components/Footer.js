import React from "react";
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <AiOutlineInstagram /> <AiFillTwitterSquare /> <AiFillFacebook /> <AiFillLinkedin />
      </div>
      <p> &copy; 1999 pizzaworld.com</p>
    </div>
  );
}

export default Footer;