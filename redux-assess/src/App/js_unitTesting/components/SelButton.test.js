import Enzyme, { shallow } from "enzyme";
import SelButton from "../../src/components/common/SelButtons";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });


describe("passing props", () => {
  let props = {
    data:[],
    Rchange: (fn) => fn,
    hanonChange: (fn) => fn,
  };
  const value ={

      param:''
  }
  it("should call hanonChange method", () => {
   
    const wrapper = shallow(<SelButton {...props} />);
    const para = wrapper.find('select');
    para.simulate('change');
    expect(wrapper.find("Rchange")).toHaveBeenCalled;
    
  });
});
