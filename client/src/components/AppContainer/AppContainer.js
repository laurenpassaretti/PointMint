import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthRoute from "../AuthRoute/AuthRoute.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import AuthNavbar from "../AuthNavbar/AuthNavbar";
import UnAuthNavbar from "../UnAuthNavbar/UnAuthNavbar.js";
import Home from "../Home/Home.js";
import User from "../../pages/User";
import Authenticate from '../../pages/Authenticate'
import Client from '../../pages/Client'
import Admin from '../../pages/Admin'


class AppContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthRoute
            path="/"
            authComponent={AuthNavbar}
            unAuthComponent={UnAuthNavbar}
          />
          <Route exact path="/" component={Home} />
          <Route path="/authenticate" component={Authenticate}/>
          <PrivateRoute path="/users/:userId" component={User} />
          <PrivateRoute path="/client" component={Client}/>
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default AppContainer;
