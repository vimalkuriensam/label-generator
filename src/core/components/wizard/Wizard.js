import React, { Component } from "react";
import ShippingLabelMaker from "../../../features/shipping-label-maker/ShippingLabelMaker";

import Stepper from "../stepper/Stepper";

class Wizard extends Component {
  state = {
    steps: [
      "Sender Address",
      "Receiver Address",
      "Weight",
      "Option",
      "Confirm",
    ],
    currentStep: 1,
    stepCount: 1,
    endAction: false,
    paymentAmount: 0,
  };

  endAction = (values) => {
    this.onComplete(values);
  };

  onComplete = (values) => {
    const { weight, shippingRate, ground } = values;
    const paymentAmount =
      parseInt(weight) * shippingRate * (parseInt(ground) === 1 ? 1 : 1.5);
    this.setState(() => ({ paymentAmount }));
    this.setState(() => ({ endAction: true }));
    setTimeout(() => {
      this.setState(() => ({ endAction: false }));
      this.setState(() => ({ paymentAmount: 0 }));
      this.setState(() => ({ currentStep: 1 }));
      this.setState(() => ({ stepCount: 1 }));
    }, 5000);
  };

  onAction = (e, state = "forward") => {
    e.preventDefault();
    if (state === "forward") {
      this.setState((prevState) => ({
        currentStep: prevState.currentStep + 1,
      }));
      this.setState((prevState) => ({ stepCount: prevState.stepCount + 1 }));
    } else {
      this.setState((prevState) => ({
        currentStep: prevState.currentStep - 1,
      }));
      this.setState((prevState) => ({ stepCount: prevState.stepCount - 1 }));
    }
  };
  render() {
    return (
      <div className="wizard">
        <div className="wizard__stepper">
          <Stepper
            steps={this.state.steps}
            currentStep={this.state.currentStep}
          />
        </div>
        <div className="wizard__wrapper">
          {!this.state.endAction ? (
            <ShippingLabelMaker
              stepCount={this.state.stepCount}
              onAction={this.onAction}
              onComplete={this.endAction}
            />
          ) : (
            <div>
              <div className="row">
                <div className="col-1-of-2">Payment</div>
                <div className="col-1-of-2">{this.state.paymentAmount}</div>
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "1.rem",
                  textAlign: "center",
                }}
              >
                Redirecting...
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Wizard;
