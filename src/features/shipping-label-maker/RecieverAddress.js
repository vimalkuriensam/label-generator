import React from "react";

const RecieverAddress = ({ onAction, onHandleChange }) => (
  <div>
    <div className="heading-tertiary">Enter Reciever Address</div>
    <div>
      <form className="form" onSubmit={onAction}>
        <div className="form__group">
          <input
            autoFocus
            type="text"
            className="form__input"
            id="name"
            placeholder="Name"
            onChange={onHandleChange}
          />
          <label className="form__label form__label--2" htmlFor="name">
            Name
          </label>
        </div>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            id="street"
            placeholder="Street"
            onChange={onHandleChange}
          />
          <label className="form__label form__label--2" htmlFor="street">
            Street
          </label>
        </div>
        <div className="row" style={{ maxWidth: "unset" }}>
          <div className="col-1-of-3">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="city"
                placeholder="City"
                onChange={onHandleChange}
              />
              <label className="form__label form__label--2" htmlFor="city">
                City
              </label>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="state"
                placeholder="State"
                onChange={onHandleChange}
              />
              <label className="form__label form__label--2" htmlFor="state">
                State
              </label>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="zip"
                placeholder="Zip"
                onChange={onHandleChange}
              />
              <label className="form__label form__label--2" htmlFor="zip">
                Zip
              </label>
            </div>
          </div>
        </div>
        <div className="form__cta">
          <button
            onClick={(e) => onAction(e, "backward")}
            type="button"
            className="btn btn--tertiary-1"
          >
            Previous
          </button>
          <button type="submit" className="btn btn--secondary">
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default RecieverAddress;
