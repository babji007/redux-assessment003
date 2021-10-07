
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Input from '../../src/components/common/Input';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
describe('Input component', () => {
let props = {
    onSubmit:fn=>fn,
    handleSubmit:fn=>fn,
  }
  
  it('should call handleSubmit method', () => {
    const value = {
      preventDefault: fn => fn,
      target:{
        new:""
      }
    
    }
    const wrapper = shallow(<Input{...props}/>);
    wrapper.instance().handleSubmit(value);
    expect(wrapper.instance().handleSubmit(value)).toBeCalled;
  });
})