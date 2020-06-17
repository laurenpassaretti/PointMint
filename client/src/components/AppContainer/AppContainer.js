import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthRoute from "../AuthRoute/AuthRoute.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import AuthNavbar from "../AuthNavbar/AuthNavbar";
import UnAuthNavbar from "../UnAuthNavbar/UnAuthNavbar.js";
import Home from "../Home/Home.js";
import Signup from "../Signup/Signup.js";
import Signin from "../Signin/Signin.js";
import User from "../User/User.js";
// import style from './AppContainer.css'

class AppContainer extends Component {
  render() {
    return (
      <Router>
        <div>
        {/* style={styles.container} */}
          <AuthRoute
            path="/"
            authComponent={AuthNavbar}
            unAuthComponent={UnAuthNavbar}
          />
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <PrivateRoute path="/users/:userId" component={User} />
        </div>
      </Router>
    );
  }
}

// const styles = {
//   container: {
//     width: 320,
//     position: "relative",
//     margin: "0 auto"
//   }
// };

export default AppContainer;
