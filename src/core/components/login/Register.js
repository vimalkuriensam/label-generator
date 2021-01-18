import React from "react";

const Register = ({
  onCloseLogin,
  onHandleSignin,
  onSubmit,
  onHandleChange,
  values
}) => (
  <div className="login">
    <div className="login__content">
      <div className="login__left">
        <div className="form__group form__group--left-adjust u-center-text">
          <h2 className="mistral-font form__register">
            Already have an Account?
          </h2>
          <button
            onClick={onHandleSignin}
            className="btn-main btn-main--link-2 u-margin-top-small"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="login__right login__right--register">
        <span onClick={onCloseLogin} className="login__close">
          &times;
        </span>
        <h2 className="heading-tertiary-2 u-center-text u-margin-bottom-small">
          Create Account
        </h2>
        <form className="form" onSubmit={onSubmit}>
          <div className="form__group form__group--column">
            <div>
              <input
                type="text"
                id="firstName"
                onChange={onHandleChange}
                className="form__input form__input--2"
                placeholder="First Name"
                value={values.firstName}
              />
              <label htmlFor="firstName" className="form__label">
                First Name
              </label>
            </div>
            <div className="u-translate-right-small">
              <input
                type="text"
                id="lastName"
                onChange={onHandleChange}
                value={values.lastName}
                className="form__input form__input--2"
                placeholder="Last Name"
              />
              <label htmlFor="lastName" className="form__label">
                Last Name
              </label>
            </div>
          </div>
          <div className="form__group">
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={onHandleChange}
              className="form__input"
              placeholder="Email"
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group">
            <input
              type="number"
              id="age"
              onChange={onHandleChange}
              value={values.age}
              className="form__input"
              placeholder="Age"
            />
            <label htmlFor="age" className="form__label">
              Age
            </label>
          </div>
          <div className="form__group">
            <input
              type="password"
              id="password"
              value={values.password}
              onChange={onHandleChange}
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
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Register;
