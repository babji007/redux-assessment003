import Enzyme,{ shallow } from 'enzyme';
import Footer from '../../src/components/Footer';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe('to display footer',()=>{
    it("to display footer",()=>{
        const wrapper = shallow(<Footer/>);
        const newstate = wrapper.find('p');
        expect(newstate.exists()).toEqual(true)
    })
})