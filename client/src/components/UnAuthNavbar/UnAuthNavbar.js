import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Mint from "../MintImg/minty.png"
import "./style.css"


const UnAuthNavBar = () => (
  <div>
    <Navbar expand="lg" id="Navbar">
      <div id="logo">
        <img src={Mint} id="Minty" />
      </div>

      <Navbar.Brand id="NavBrand">PointMint</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" id="Home">
            Home
    </NavLink>
    <NavLink
    id="SignUp"
      to="/authenticate"
      
      
    >
      Signup/Signin
    </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);



export default UnAuthNavBar;
