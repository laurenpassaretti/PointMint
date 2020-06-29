import React from "react";
import * as api from "../../api";
import './style.css'
import { UserContext } from "../../utils/UserContext";
import { ERR_PASSWORD, ERR_SIGNUP, USER_SIGNUP } from "../../utils/actions";


function Signup(props) {
  const { dispatch } = React.useContext(UserContext);
  const initialState = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    user_type: "client",
    unMatchPwdErr: "",
    signupError: {}
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
    if (user.password !== user.passwordConfirm) {
      dispatch({ type: ERR_PASSWORD, error: "Doesn't match!"})
      setUser({ unMatchPwdErr: "Doesn't match!" });
      return;
    }
    if (user.name && user.email && user.password) {
      const name = user.name;
      const email = user.email;
      const password = user.password;
      const user_type = user.user_type;
      const payload = { name, email, password, user_type };
      try {
        const { data } = await api.signup(payload);
        dispatch({ type: USER_SIGNUP, payload: data.user, token: data.token });
        props.history.push("/");
      } catch (error) {
        if (error.response) {
          console.log(error);
          const { data } = error.response;
          dispatch({ type: ERR_SIGNUP, error: data });
          setUser({ signupError: data });
        }
      }
    }
  };

  return (
    <div>

    <div className="justify-content-md-center pt-3" id="Header">
      <h3 id="Header">Create Your PointMint Account</h3>
      </div>

      <form onSubmit={handleFormSubmit} id="Form">

        <div className="Input">
          <div id="LabelUserName">
            <label>User Name</label>
            <span className="Span"> * </span>
          </div>
          <input
            name="name"
            type="text"
            value={user.name}
            onChange={handleInputChange}
            required
            autoFocus
          />
        </div>

        <div className="Input">
          <div>
            <label id="LabelEmail">Email Address</label>
            <span className="Span"> * </span>
            <span style={style.error}>{user.signupError.email}</span>
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
          </div>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleInputChange}
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
            minLength="8"
            title="Password must be at least 8 characters and include at least 1 uppercase character, 1 lowercase character, and 1 number."
            required
          />
        </div>

        <div className="Input">
          <div>
            <label id="Label">Confirm Password</label>
            <span className="Span"> * </span>
            <span style={style.error}>{user.unMatchPwdErr}</span>
          </div>

          <input
            name="passwordConfirm"
            type="password"
            value={user.passwordConfirm}
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

export default Signup;
