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
    <div>
      <Navbar expand="lg" id="NavBar">
        <img src={Mint} id="Mint" alt="Mint leaf"/>
        <Navbar.Brand id="NavBrand">PointMint</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" id="Home">
              Home
            </NavLink>
            {state.user_type === "client" ? (
              <NavLink to="/client" id="Client">
                Sch Appt
              </NavLink>
            ) : (
              <NavLink to="/admin" id="Admin">
                View Appts
              </NavLink>
            )}
            <NavLink
              to={`/users/${state._id}`}
              id="Profile"
            >
              Profile
            </NavLink>
            <div
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
    </div>
  );
}

export default AuthNavBar;
