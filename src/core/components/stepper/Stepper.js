import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
      <ul className="stepper__list">
        {steps.map((step, index) => {
          if (index < currentStep - 1)
            return (
              <li
                className="stepper__listitem stepper__listitem--1"
                key={index}
              >
                {step}
              </li>
            );
          else if (index === currentStep - 1)
            return (
              <li
                className="stepper__listitem stepper__listitem--current"
                key={index}
              >
                {step}
              </li>
            );
          return (
            <li className="stepper__listitem stepper__listitem--2" key={index}>
              {step}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Stepper;
