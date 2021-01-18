import React from "react";

const SenderAddress = ({ onAction, onHandleChange }) => (
  <div>
    <div className="heading-tertiary">Enter Sender Address</div>
    <div>
      <form className="form" onSubmit={onAction}>
        <div className="form__group">
          <input
            autoFocus
            type="text"
            className="form__input"
            id="senderName"
            placeholder="Name"
            onChange={onHandleChange}
          />
          <label className="form__label form__label--2" htmlFor="senderName">
            Name
          </label>
        </div>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            id="senderStreet"
            placeholder="Street"
            onChange={onHandleChange}
          />
          <label className="form__label form__label--2" htmlFor="senderStreet">
            Street
          </label>
        </div>
        <div className="row" style={{ maxWidth: "unset" }}>
          <div className="col-1-of-3">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="senderCity"
                placeholder="City"
                onChange={onHandleChange}
              />
              <label
                className="form__label form__label--2"
                htmlFor="senderCity"
              >
                City
              </label>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="senderState"
                placeholder="State"
                onChange={onHandleChange}
              />
              <label
                className="form__label form__label--2"
                htmlFor="senderState"
              >
                State
              </label>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="senderZip"
                placeholder="Zip"
                onChange={onHandleChange}
              />
              <label className="form__label form__label--2" htmlFor="senderZip">
                Zip
              </label>
            </div>
          </div>
        </div>
        <div className="form__cta">
          <button type="submit" className="btn btn--secondary">
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default SenderAddress;
