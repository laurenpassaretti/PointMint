import React from "../../../node_modules/react";
import { NavLink } from "../../../node_modules/react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css"
import Mint from '../MintImg/minty.png'
import { UserContext } from "../../utils/UserContext";
import { USER_LOGOUT } from "../../utils/actions";


function AuthNavBar(props) {
  const { state, dispatch } = React.useContext(UserContext);
  return(

      <Navbar expand="lg" id="NavBar">
      <div id="logo">
        <img src={Mint} id="Minty" alt="Mint leaf"/>
      </div>
      <Navbar.Brand id="NavBrand" href="/">PointMint</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav"> 
        <Nav className="navbar-nav ml-auto pr-5">
          <div className="navbar-nav">
          {state.user_type === "client" ? (
            <NavLink to="/client" id="Client">
                Schedule
              </NavLink>
            ) : (
              <NavLink to="/admin" id="Admin">
                View Appts
              </NavLink>
            )}
          </div>

            <NavLink
              className="navbar-nav"
              to={`/users/${state._id}`}
              id="Profile"
            >
              Profile
            </NavLink>
      
              <div
              className="navbar-nav"
              id="Logout"

              onClick={() => {
                dispatch({ type: USER_LOGOUT })
                props.history.push("/");
              }}
              >
                Logout
              
              </div>
 </Nav>

      

        </Navbar.Collapse>
      </Navbar>

  );
}

export default AuthNavBar;
