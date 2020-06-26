import React from "../../../node_modules/react";
import { NavLink } from "../../../node_modules/react-router-dom";
import { removeToken } from "../../tokenUtils";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css"
import Mint from '../MintImg/minty.png'


const AuthNavBar = ({ history, authedId }) => (
  <div>

    <Navbar expand="lg" id="NavBar">
      <img src={Mint} id="Mint" />
      <Navbar.Brand id="NavBrand">PointMint</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" id="Home">
            Home
          </NavLink>
          <NavLink
            to={`/users/${authedId}`}
            id="Profile"
          >
            Profile
          </NavLink>
          <div
            id="Logout"
            onClick={() => {
              removeToken();
              history.push("/");
            }}
          >
            Logout
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>


);

export default AuthNavBar;
