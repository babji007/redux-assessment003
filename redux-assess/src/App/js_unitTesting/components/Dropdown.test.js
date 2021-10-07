import Enzyme, { shallow } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Dropdown from "../../src/components/Dropdown";
Enzyme.configure({ adapter: new Adapter() });


describe("Select Buttons for displaying Pokemon and abilities",()=>{
    let props = {
        content:{
          pokemon:[{
            "ability":
            {
            "name": "charmeleon",
          }
          }]
        },
        // changePokemon:fn=>fn,
        fetchabilities:fn=>fn,
        // handleClose:fn=>fn,
        error:true,
    }
    it('should call 1st select method', () => {
        const value = {
          target: {
            requiredItem: ""
          }
        }
        const wrapper = shallow(<Dropdown {...props} />);
        expect(wrapper.instance().changePokemon(value)).toHaveBeenCalled
      });
      it('should call handleClose method', () => {
        const value = {
          target: {
            isOpen: true,
          }
        }
        const wrapper = shallow(<Dropdown {...props} />);
        expect( wrapper.instance().togglePopup(value)).toHaveBeenCalled
      });
    it('renders common 2nd select Button ',()=>{
 
        const wrapper = shallow(<Dropdown {...props}  />)
        const para = wrapper.find(`Button`).at(1);
        expect(para.exists()).toEqual(true)
      
    })
    it("render the popup error",()=>{
        const wrapper = shallow(<Dropdown {...props} />)
        const para = wrapper.find('Popup')
        expect(para).toHaveBeenCalled
    })

    it('should check `componentDidMount()`', () => {
      const wrapper = shallow(<Dropdown{...props}/>)
      const instance = wrapper.instance();
      instance.componentDidMount();
      expect(instance.fetchabilities).toHaveBeenCalled; 
    });
  
})

