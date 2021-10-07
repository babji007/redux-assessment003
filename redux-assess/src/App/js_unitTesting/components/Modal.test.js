import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Modal from '../../src/components/Modal';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ 
    adapter: new Adapter() ,
});
describe('Modal component', () => {
    let props = {
        handleSave:fn=>fn,
        saveDetails:fn=>fn,   
        msgHandler:fn=>fn ,
        handleClose:fn=>fn, 
        dataDismiss:fn=>fn,
        nextProps:{}
    }
    it('should call handleOnChange method', () => {
        const value = {
          target: {
            msg: "make changes"
          }
        }
        const wrapper = shallow(<Modal {...props} />);
        wrapper.instance().msgHandler(value);
        expect(wrapper.exists()).toBe(true);
        
      });
    it('should  call handleSave',()=>{
        const wrapper = shallow(<Modal {...props} />);
        wrapper.find(`[id="save"]`).simulate('click');
        expect(wrapper.find("handleSave")).toHaveBeenCalled;

    })
  })