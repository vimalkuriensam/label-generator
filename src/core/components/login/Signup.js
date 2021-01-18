import React from "react";

const Signup = ({
  onCloseLogin,
  onLoginSubmit,
  onHandleChange,
  onHandleRegister,
  onSubmit,
  values
}) => (
  <div className="login">
    <div className="login__content">
      <div className="login__left">
        <div className="form__group form__group--left-adjust u-center-text">
          <h2 className="mistral-font">New to</h2>
          <h2 className="heading-primary">
            Shipping Label <span className="mistral-font">?</span>
          </h2>
          <button
            onClick={onHandleRegister}
            className="btn-main btn-main--link-2 u-margin-top-medium"
          >
            Register
          </button>
        </div>
      </div>
      <div className="login__right">
        <span onClick={onCloseLogin} className="login__close">
          &times;
        </span>
        <h2 className="heading-tertiary-2 u-center-text u-margin-bottom-small">
          Welcome Back
        </h2>
        <form className="form" onSubmit={onSubmit}>
          <div className="form__group">
            <input
              type="email"
              id="email"
              onChange={onHandleChange}
              value={values.email}
              className="form__input"
              placeholder="Email"
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group">
            <input
              type="password"
              id="password"
              onChange={onHandleChange}
              value={values.password}
              className="form__input"
              placeholder="Password"
            />
            <label htmlFor="password" className="form__label">
              Password
            </label>
          </div>
          <div className="form__group">
            <div className="form__action">
              <button type="submit" className="btn btn--signin">
                Sign In
              </button>
              <a href="#" className="form__link u-padding-top-small">
                Forgot Password
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Signup;
