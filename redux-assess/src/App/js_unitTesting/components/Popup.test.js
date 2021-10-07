import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Popup from '../../src/components/Popup';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });


describe("passing props", () => {
    let props = {
        handleClose:fn=>fn,
        Content:fn=>fn,
    }
    it("should call ButtonItem method", () => {
      const wrapper = shallow(<Popup {...props} />);
      wrapper.find(`[id='span']`).simulate('click');
      expect(wrapper.find("handleClose")).toBeCalled;
    });

})