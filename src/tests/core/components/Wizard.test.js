import React from "react";
import { shallow } from "enzyme";

import Wizard from "../../../core/components/wizard/Wizard";

test("Should render wizard component correctly", () => {
  const wrapper = shallow(<Wizard />);
  expect(wrapper).toMatchSnapshot();
});

test("Should increase stepper value on onAction click for next", () => {
  const wrapper = shallow(<Wizard />);
  const currentStep = wrapper.state("currentStep");
  const stepCount = wrapper.state("stepCount");
  wrapper.find("ShippingLabelMaker").prop("onAction")(
    { preventDefault: () => {} },
    "forward"
  );
  expect(wrapper.state("currentStep")).toBe(currentStep + 1);
  expect(wrapper.state("stepCount")).toBe(stepCount + 1);
  expect(wrapper).toMatchSnapshot();
});

test("Should decrease stepper value on onAction click for previous", () => {
  const wrapper = shallow(<Wizard />);
  const currentStep = wrapper.state("currentStep");
  const stepCount = wrapper.state("stepCount");
  wrapper.find("ShippingLabelMaker").prop("onAction")(
    { preventDefault: () => {} },
    "backward"
  );
  expect(wrapper.state("currentStep")).toBe(currentStep - 1);
  expect(wrapper.state("stepCount")).toBe(stepCount - 1);
  expect(wrapper).toMatchSnapshot();
});

test("Should call onComplete function when endAction is called from shippingLabelMaker", () => {
  const wrapper = shallow(<Wizard />);
  wrapper.find('ShippingLabelMaker').prop('onComplete')();
  expect(wrapper.state('endAction')).toBe(true);
  expect(wrapper).toMatchSnapshot();
})

test("Should printout shipping cost correctly", () => {
  const value = {
    weight: 1,
    shippingRate: 0.4,
    ground: 1,
  }
  const wrapper = shallow(<Wizard />);
  wrapper.find('ShippingLabelMaker').prop('onComplete')(value);
  expect(wrapper.state('paymentAmount')).toBe(0.4);
})
