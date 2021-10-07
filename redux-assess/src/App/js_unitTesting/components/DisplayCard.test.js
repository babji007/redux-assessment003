import React from "react";
import Enzyme, { shallow } from "enzyme";
import DisplayCard from "../../src/components/DisplayCard";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });


describe("DisplayCard", () => {
  let props = {
    list:[],
    deleteItem: (fn) => fn,
    Bondel: (fn) => fn,
    editItem: (fn) => fn,
    Bonedit: (fn) => fn,
    saveDetails: (fn) => fn,
    BsaveDetails: (fn) => fn,
  };
  const value = {
    target: {
      requiredItem: "",
    },
  };
  it("should call deleteItem method", () => {
    const wrapper = shallow(<DisplayCard {...props}  />);
    expect(wrapper.instance().deleteItem(value)).toHaveBeenCalled;
  });

  it("should call EditItem method", () => {
    const wrapper = shallow(<DisplayCard {...props}  />);
    expect(wrapper.instance().editItem(value)).toHaveBeenCalled;
  });
  it("should call saveDetails method", () => {
    const wrapper = shallow(<DisplayCard {...props}  />);
    // wrapper.instance().saveDetails(value);
    expect(wrapper.instance().saveDetails(value)).toHaveBeenCalled;
  });
});
