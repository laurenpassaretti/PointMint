import React, { Component } from "react";
import * as api from "../../api";
import { saveToken } from "../../tokenUtils";
import './style.css'

class Signin extends Component {
  state = {
    email: "",
    password: "",
    user_type: "",
    signinError: {}
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
    const { email, password, user_type } = this.state;
    if (email && password) {
      try {
        const payload = { email, password, user_type };
        const { data } = await api.signin(payload);
        saveToken(data);
        const { from } = this.props.location.state || {
          from: { pathname: "/" }
        };
        this.props.history.push(from.pathname);
      } catch (error) {
        console.log(error);
        if (error.response) {
          const { data } = error.response;
          this.setState({ signinError: data });
        }
      }
    }
  };

  render() {
    const { email, password, signinError } = this.state;

    return (
      <div>
        <h3 id="Header">Sign In to Your PointMint Account</h3>
        <form onSubmit={this.handleFormSubmit} id="Form">


          <div className="Input">
            <div>
              <label id="LabelEmail">Email Address</label>
              <span className="Span"> * </span>
              <span style={style.error}>{signinError.email}</span>
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
              <span style={style.error}>{signinError.password}</span>
            </div>

            <input
              name="password"
              type="password"
              value={password}
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

export default Signin;
