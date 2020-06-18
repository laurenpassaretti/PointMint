import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import AuthNavbar from "./AuthNavbar";
import UnAuthNavbar from "./UnAuthNavbar";
import Home from "../pages/Home";
import User from "../pages/User";
import Client from "../pages/Client";
import Authenticate from "../pages/Authenticate";

class AppContainer extends Component {
  render() {
    return (
      <Router>
        <div style={styles.container}>
          <AuthRoute
            path="/"
            authComponent={AuthNavbar}
            unAuthComponent={UnAuthNavbar}
          />
          <Route exact path="/" component={Home} />
          <Route path="/authenticate" component={Authenticate}/>
          <PrivateRoute path="/users/:userId" component={User} />
          <PrivateRoute path="/client" component={Client}/>
        </div>
      </Router>
    );
  }
}

const styles = {
  container: {
    width: 650,
    position: "relative",
    margin: "0 auto"
  }
};

export default AppContainer;
