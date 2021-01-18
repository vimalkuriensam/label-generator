import React from "react";

const Weight = ({ onAction, onHandleChange }) => (
  <div>
    <div className="heading-tertiary">Enter Weight</div>
    <div>
      <form className="form" onSubmit={onAction}>
        <div className="form__group">
          <input
            autoFocus
            type="text"
            className="form__input"
            id="weight"
            placeholder="Weight"
            onChange={onHandleChange}
          />
          <label className="form__label form__label--2" htmlFor="weight">
            Weight
          </label>
        </div>
        <div className="form__cta">
          <button onClick={(e) => onAction(e, "backward")} type="button" className="btn btn--tertiary-1">Previous</button>
          <button type="submit" className="btn btn--secondary">
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Weight;
