import Enzyme,{ shallow } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from '../../src/components/Header';
Enzyme.configure({ adapter: new Adapter() });

describe('to display footer',()=>{
    it("to display anchor element",()=>{
        const wrapper = shallow(<Header/>);
        const element = wrapper.find('a');
        expect(element.length).toEqual(1)
    })
    it("to display anchor tag element",()=>{
        const wrapper = shallow(<Header/>);
        const newstate = wrapper.find('Link').at(0);
        expect(newstate).toEqual({})
    })
})