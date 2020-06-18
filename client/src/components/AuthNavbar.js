import React from "react";
import { NavLink } from "react-router-dom";
import { removeToken } from "../tokenUtils";

const AuthNavBar = ({ history, authedId }) => (
  <div style={styles.container}>
    <NavLink to="/" exact activeStyle={{ color: "red" }} style={styles.leftNav}>
      Home
    </NavLink>
    <NavLink
      to={`/users/${authedId}`}
      activeStyle={{ color: "red" }}
      style={styles.rightNavs}
    >
      Profile
    </NavLink>
    <NavLink
      to={"/client"}
      activeStyle={{ color: "red" }}
      style={styles.rightNavs}
    >
      Sched Appt
    </NavLink>
    <div
      onClick={() => {
        removeToken();
        history.push("/authenticate");
      }}
      style={{ ...styles.rightNavs, ...styles.logoutBtn }}
    >
      Logout
    </div>
  </div>
);

const styles = {
  container: {
    display: "flex"
  },
  leftNav: {
    flexGrow: 4
  },
  rightNavs: {
    flexGrow: 1
  },
  logoutBtn: {
    cursor: "pointer"
  }
};

export default AuthNavBar;
