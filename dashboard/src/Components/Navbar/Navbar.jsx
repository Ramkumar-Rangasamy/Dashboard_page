import React from 'react';

//style.css
import './navbar.css';

//Brand Logo
import logo from './Assets/logo.png';

//Nav Icons imported
import { FaSearch } from "react-icons/fa";
import { ImFolderPlus } from "react-icons/im";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { HiBellAlert } from "react-icons/hi2";
import { SiCocacola } from "react-icons/si";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light back-color sticky-top">
            <a className="navbar-brand pl-4" href="#">
                <img src={logo} width='170' className='img-logo ' alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav  ml-auto search-font">
                <li className="nav-item ">
                    <a className="nav-link" href="#"><FaSearch  className='nav-style'/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><ImFolderPlus className='nav-style'/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><BsFillEnvelopeExclamationFill className='nav-style' /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><HiBellAlert className='nav-style'/></a> 
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><SiCocacola className='cocaola' /></a>
                </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar