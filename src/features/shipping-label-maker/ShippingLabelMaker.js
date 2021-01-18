import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Confirm from "./Confirm";
import Option from "./Option";
import RecieverAddress from "./RecieverAddress";
import SenderAddress from "./SenderAddress";
import Weight from "./Weight";

class ShippingLabelMaker extends Component {
  state = {
    senderName: "",
    senderStreet: "",
    senderCity: "",
    senderState: "",
    senderZip: "",
    recieverName: "",
    recieverStreet: "",
    recieverCity: "",
    recieverState: "",
    recieverZip: "",
    weight: "",
    ground: "",
    priority: "",
  };
  onHandleChange = (e) => {
    const value = { [e.target.id]: e.target.value };
    this.setState(() => value);
  };

  onLogout = () => {
    localStorage.clear('shippingToken');
    this.props.history.push('/login')
  };

  onHandleComplete = (e) => {
    e.preventDefault();
    const values = {
      weight: this.state.weight,
      shippingRate: 0.4,
      ground: this.state.ground,
    };
    this.props.onComplete(values);
  };

  getLabelComponent = () => {
    switch (this.props.stepCount) {
      case 1:
        return (
          <SenderAddress
            onAction={this.props.onAction}
            onHandleChange={this.onHandleChange}
          />
        );
      case 2:
        return (
          <RecieverAddress
            onAction={this.props.onAction}
            onHandleChange={this.onHandleChange}
          />
        );
      case 3:
        return (
          <Weight
            onAction={this.props.onAction}
            onHandleChange={this.onHandleChange}
          />
        );
      case 4:
        return (
          <Option
            onAction={this.props.onAction}
            onHandleChange={this.onHandleChange}
          />
        );
      case 5:
        return (
          <Confirm
            onAction={this.props.onAction}
            onHandleChange={this.onHandleChange}
            values={this.state}
            onComplete={this.onHandleComplete}
          />
        );
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={this.onLogout}
          style={{
            position: "absolute",
            top: "4rem",
            right: "8rem",
            background: "maroon",
            color: "#fff",
            cursor: 'pointer'
          }}
          className="btn btn--secondary"
        >
          LOGOUT
        </button>
        <div>{this.getLabelComponent()}</div>
      </div>
    );
  }
}

export default withRouter(ShippingLabelMaker);
