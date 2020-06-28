import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";


const PrivateRoute = ({ authedId, component: Component, ...rest }) => {
  const { state } = React.useContext(UserContext);
  return (  
  <Route
    {...rest}
    render={props => {
      const authedId = state._id;
      return authedId ? (
        <Component {...props} authedId={authedId} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
)};

export default PrivateRoute;
