import React, { Component } from "react";
import * as api from "../../api";
import { saveToken } from "../../tokenUtils";
import './style.css'


class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    unMatchPwdErr: "",
    signupError: {}
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ unMatchPwdErr: "Doesn't match!" });
      return;
    }
    const { name, email, password } = this.state;
    if (name && email && password) {
      const payload = { name, email, password };
      try {
        const { data } = await api.signup(payload);
        saveToken(data);
        this.props.history.push("/");
      } catch (error) {
        if (error.response) {
          console.log(error);
          const { data } = error.response;
          this.setState({ signupError: data });
        }
      }
    }
  };

  render() {
    const {
      name,
      email,
      password,
      passwordConfirm,
      unMatchPwdErr,
      signupError
    } = this.state;

    return (
      <div>
        <h3 id="Header">Create Your PointMint Account</h3>
        <form onSubmit={this.handleFormSubmit} id="Form">

          <div className="Input">
            <div id="LabelUserName">
              <label>User Name</label>
              <span className="Span"> * </span>
            </div>
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.handleInputChange}
              required
              autoFocus
            />
          </div>

          <div className="Input">
            <div>
              <label id="LabelEmail">Email Address</label>
              <span className="Span"> * </span>
              <span style={style.error}>{signupError.email}</span>
            </div>
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
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
              value={password}
              onChange={this.handleInputChange}
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
              <span style={style.error}>{unMatchPwdErr}</span>
            </div>

            <input
              name="passwordConfirm"
              type="password"
              value={passwordConfirm}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <input type="submit" value="Submit" id="SubmitButton" />
        </form>
      </div>
    );
  }
}

const style = {
  error: {
    color: "red"
  }
};

export default Signup;
