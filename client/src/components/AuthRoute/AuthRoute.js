import React from "react";
import { Route } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const AuthRoute = ({
  authComponent: AuthComponent,
  unAuthComponent: UnAuthComponent,
  ...rest
}) => {
  const { state } = React.useContext(UserContext);
  return (
  <Route
    {...rest}
    render={props => {
      return state._id ? (
        <AuthComponent authedId={state._id} {...props} />
      ) : (
        <UnAuthComponent {...props} />
      );
    }}
  />
)
};

export default AuthRoute;
