import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav'
import styles from './styles'
import Mint from "../MintImg/minty.png"


const UnAuthNavBar = () => (
  <div>
    <Navbar expand="lg" style={styles.Navbar}>
    <img src ={Mint} style={styles.Mint}/>
    <Navbar.Brand style = {styles.NavBrand}>PointMint</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavLink to="/" style={styles.Home}>
      Home
    </NavLink>
    <NavLink
      to="/signup"
      
      style={styles.SignUp}
    >
      SignUp
    </NavLink>
    <NavLink
      to="/signin"
      
      style={styles.SignIn}
    >
      SignIn
    </NavLink>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  </div>
);



export default UnAuthNavBar;
