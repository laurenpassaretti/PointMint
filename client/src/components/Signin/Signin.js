import React from "react";
import * as api from "../../api";
import './style.css'
import { UserContext } from "../../utils/UserContext";
import { USER_SIGNIN, ERR_SIGNIN } from "../../utils/actions";

function Signin(props) {
  const { dispatch } = React.useContext(UserContext);
  const initialState = {
    email: "",
    password: "",
    user_type: "",
    signinError: {}
  };
  const [user, setUser] = React.useState(initialState);

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setUser({
      ...user,
      [event.target.name]: value
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    if (user.email && user.password) {
      try {
        const email = user.email;
        const password = user.password;
        const user_type = user.user_type;
        const payload = { email, password, user_type };
        const { data } = await api.signin(payload);
        dispatch({ type: USER_SIGNIN, payload: data.user, token: data.token });
        const { from } = props.location.state || {
          from: { pathname: "/" }
        };
        props.history.push(from.pathname);
      } catch (error) {
        console.log(error);
        if (error.response) {
          const { data } = error.response;
          setUser({ ...user, signinError: data });
          dispatch({ type: ERR_SIGNIN, error: data });
        }
      }
    }
  };

  return (
    <div>
    <div className="justify-content-md-center pt-3" id="Header">
      <h3 id="Header">Sign In to Your PointMint Account</h3>
      </div>
      <form onSubmit={handleFormSubmit} id="Form">


        <div className="Input">
          <div>
            <label id="LabelEmail">Email Address</label>
            <span className="Span"> * </span>
            <span style={style.error}>{user.signinError.email}</span>
          </div>

          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="Input">
          <div>
            <label id="LabelPassword">Password</label>
            <span className="Span"> * </span>
            <span style={style.error}>{user.signinError.password}</span>
          </div>

          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <input type="submit" value="Submit" id="SubmitButton" />
      </form>
    </div>
  );
}

const style = {
  error: {
    color: "red"
  }
};

export default Signin;
