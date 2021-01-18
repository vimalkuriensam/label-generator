import React, { Component } from "react";
import Register from "./Register";
import Signup from "./Signup";

import { registerForm, signupForm } from "../../../services/login.service";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    login: false,
    register: false,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
  };

  onHandleRegister = () => {
    this.setState(() => ({ login: false }));
    this.setState(() => ({ register: true }));
  };
  onHandleLogin = () => {
    this.setState(() => ({ login: true }));
    this.setState(() => ({ register: false }));
  };

  onCloseLogin = () => {
    this.setState(() => ({ login: false }));
    this.setState(() => ({ register: false }));
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const registerValue = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password,
    };
    const { resp, error } = await registerForm(registerValue);
    if (resp.token) {
      localStorage.setItem("shippingToken", resp.token);
      this.props.history.push("/");
    }
  };

  onLogin = async (e) => {
    e.preventDefault();
    const loginValues = {
      email: this.state.email,
      password: this.state.password,
    };
    const { resp, error } = await signupForm(loginValues);
    if (resp.token) {
      localStorage.setItem("shippingToken", resp.token);
      this.props.history.push("/");
    }
  };

  onHandleChange = (e) => {
    const value = {
      [e.target.id]: e.target.value,
    };
    this.setState(() => value);
  };
  render() {
    return (
      <div className="login-main">
        <div className="login-main__cta">
          <button
            className="btn btn--secondary"
            onClick={this.onHandleRegister}
          >
            REGISTER
          </button>
          <button className="btn btn--secondary" onClick={this.onHandleLogin}>
            LOGIN
          </button>
        </div>
        <div>
          {this.state.login && (
            <Signup
              onCloseLogin={this.onCloseLogin}
              onHandleChange={this.onHandleChange}
              values={this.state}
              onSubmit={this.onLogin}
            />
          )}
          {this.state.register && (
            <Register
              onCloseLogin={this.onCloseLogin}
              onHandleChange={this.onHandleChange}
              values={this.state}
              onSubmit={this.onSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
