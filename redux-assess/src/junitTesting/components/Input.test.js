
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// import Form from '../../component/Form';
import Input from '../../components/Input';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
describe('Input component', () => {
    test("renders" , ()=>{
        const wrapper = shallow(<Input />); 
    expect(wrapper.exists()).toBe(true);
  })
let props = {
    MockData: {
        heading: "Select Ability based on Pokemon",
        label1: 'Select Pokemon',
        label2: "Select Ability",
        label3: 'EDIT',
        label4: 'DELETE',
    },
    onSubmit:fn=>fn,
    handleSubmit:fn=>fn,
    // handleOnChange:fn=>fn
  }
  // it('should call handleSubmit method', () => {
  //   const value = {
  //     target: {
  //       newItemInput: ""
  //     }
  //   }
  //   const wrapper = shallow(<Input {...props} />);
  //   wrapper.instance().handleSubmit({
  //     preventDefault: () => { },
  //     value
  //   });
  //   expect(wrapper.state('newItemInput')).toEqual(""); //remove 1
  // });
  it('should call handleSubmit method', () => {
    const value = {
      preventDefault: fn => fn
    }
      const wrapper = shallow(<Input{...props}/>);
      wrapper.instance().handleSubmit(value);
      expect(wrapper.state('newItemInput')).toEqual("");
  });
  // it('should call handleOnChange method', () => {
  //   const value = {
  //     target:{
  //       value:"create item"
  //     }}
  //     const wrapper = shallow(<Input/>);
  //     wrapper.instance().handleOnChange(value);
  //     expect(wrapper.state('newItemInput')).toEqual("create item");
  // });

  it('renders inputfield ', () => {
    const value = {
      target: {
        newItemInput: ""
      }
    }

    const wrapper = shallow(<Input {...props} />);
    const inputField=wrapper.find(`[id="msg"]`).simulate('change', { target: { newItemInput: "" } });
    expect(inputField.find('#msg').exists()).toBe(true);
  });
  it('renders button ', () => {
    const value = {
      target: {
        newItemInput: ""
      }
    }
    const wrapper = shallow(<Input {...props} />);
    const button = wrapper.find(`[id="submit"]`).simulate('click', { target: { newItemInput: "" }, preventDefault: fn => fn });
    expect(wrapper.state('newItemInput')).toEqual(""); //remove 1
    expect(button.find('#submit').exists()).toBe(true);
  });

})