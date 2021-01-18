import React from "react";

const Confirm = ({ values, onComplete }) => {
  return (
    <div>
      <form className="form" onSubmit={onComplete}>
        <h1>Sender Information</h1>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">Name</div>
          <div className="a-col-1-of-2">{values.senderName}</div>
        </div>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">Street</div>
          <div className="a-col-1-of-2">{values.senderStreet}</div>
        </div>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">City</div>
          <div className="a-col-1-of-2">{values.senderCity}</div>
        </div>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">State</div>
          <div className="a-col-1-of-2">{values.senderState}</div>
        </div>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">Zip</div>
          <div className="a-col-1-of-2">{values.senderZip}</div>
        </div>
        <h1>Reciever Information</h1>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">Name</div>
          <div className="a-col-1-of-2">{values.recieverName}</div>
        </div>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">Street</div>
          <div className="a-col-1-of-2">{values.recieverStreet}</div>
        </div>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">City</div>
          <div className="a-col-1-of-2">{values.recieverCity}</div>
        </div>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">State</div>
          <div className="a-col-1-of-2">{values.recieverState}</div>
        </div>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">Zip</div>
          <div className="a-col-1-of-2">{values.recieverZip}</div>
        </div>
        <h1>Weight</h1>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">Weight</div>
          <div className="a-col-1-of-2">{values.weight}</div>
        </div>
        <h1>Option</h1>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">Ground</div>
          <div className="a-col-1-of-2">{values.ground}</div>
        </div>
        <div className="a-row">
          <div className="a-col-1-of-2 wizard--key">Priority</div>
          <div className="a-col-1-of-2">{values.priority}</div>
        </div>
        <hr />
        <div className="form__cta">
          <button type="button" className="btn btn--secondary">
            Previous
          </button>
          <button type="submit" className="btn btn--tertiary-1">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Confirm;
