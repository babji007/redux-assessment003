import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import Button from '../../src/components/common/Button';

    describe("passing props", () => {
        let props = {
          buttonItem: (fn) => fn,
          ButtonItem: (fn) => fn,
        };
        it("should call ButtonItem method", () => {
          const wrapper = shallow(<Button {...props} />);
          wrapper.find('button').simulate('click');
          expect(wrapper.find("buttonItem")).toBeCalled;
        });
      
})
