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
      <img src ={Mint} id="minty"/>
      </div>
   
    <Navbar.Brand id="NavBrand">PointMint</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavLink to="/" id="Home">
      Home
    </NavLink>
    <NavLink
      to="/signup"
      
      id="SignUp"
    >
      SignUp
    </NavLink>
    <NavLink
      to="/signin"
      
      id="SignIn"
    >
      SignIn
    </NavLink>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  </div>
);



export default UnAuthNavBar;
