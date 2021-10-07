import Enzyme, { shallow } from "enzyme";

import List from "../../src/components/List";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("getting displayed whole todo", () => {
  
 
  it("renders input box and add button", () => {
    const value = {
      preventDefault:fn=>fn,
      target: {
        reset:fn=>fn,
        elements:{
        msg: "",
      },}
    };
    const wrapper = shallow(<List />);
    const para = wrapper.find("Input");
    wrapper.instance().handleSubmit(value);
    expect(para.find("#input").exists()).toBe(true);
    // wrapper.simulate('click',{length=0})
  });
  it("should call Edit method", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<List />);
    wrapper.instance().editItem(value);
    expect(wrapper.instance().editItem(value)).toHaveBeenCalled;
  });
  it("should call Delete method", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<List />);
    wrapper.instance().deleteItem(value);
    expect(wrapper.instance().deleteItem(value)).toHaveBeenCalled;
  });
  it("should call savedetails method", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<List />);
    wrapper.instance().saveDetails(value);
    expect(wrapper.instance().saveDetails(value)).toHaveBeenCalled;
  });
});
