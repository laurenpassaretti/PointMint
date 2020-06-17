import React from "../../../node_modules/react";
import { NavLink } from "../../../node_modules/react-router-dom";
import { removeToken } from "../../tokenUtils";
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav'; 
import styles from "./styles"
// import styles from "./style.css"

const AuthNavBar = ({ history, authedId }) => (
  <div> 
  {/* style={styles.container} */}
    <Navbar expand="lg" style= {styles.Navbar}>
    <Navbar.Brand style = {styles.NavBrand}>PointMint</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <NavLink to="/" style={styles.Home}>
    {/* exact activeStyle={{ color: "red" }} style={styles.leftNav} NavLink to / style*/}
      Home
    </NavLink>
    <NavLink
      to={`/users/${authedId}`}
      style = {styles.Profile}
      // activeStyle={{ color: "red" }}
      // style={styles.rightNavs}
    >
    Profile
    </NavLink>
    <div
    style = {styles.Logout}
      onClick={() => {
        removeToken();
        history.push("/");
      }}
      // style={{ ...styles.rightNavs, ...styles.logoutBtn }}
    >
      Logout
    </div>
    </Nav>
    {/* <div
    style = {styles.Logout}
      onClick={() => {
        removeToken();
        history.push("/");
      }}
      // style={{ ...styles.rightNavs, ...styles.logoutBtn }}
    >
      Logout
    </div> */}
    </Navbar.Collapse>
    </Navbar>
  </div>


);
{/* <style type="text/css">
    {`
    .navbar-brand {
      color: purple;
    }

   
    `}
  </style> */}
// const styles = {
//   container: {
//     display: "flex"
//   },
//   leftNav: {
//     flexGrow: 4
//   },
//   rightNavs: {
//     flexGrow: 1
//   },
//   logoutBtn: {
//     cursor: "pointer"
//   }
// };

export default AuthNavBar;
