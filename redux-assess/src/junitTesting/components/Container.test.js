import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import Container from '../../container/Container';
import configureStore from "redux-mock-store";
import  mapStateToProps from '../../container/Container'
// import mockStore from 'redux-mock-store';
import configureMockStore from 'redux-mock-store';
import Store from '../../Store/Store';
const mockStore = configureMockStore();
describe("testing for container",()=>{
  beforeEach(() => {
    const initialState = {
        res: {}
    };
   const store = mockStore(initialState);
    // Shallow render the container passing in the mock store
    const wrapper = shallow(
        <Container store={store} />
    );
});
it('should show previously rolled value', () => {
  const initialState = {
    res: {}
};
  const store = mockStore(initialState);
  // test that the state values were correctly passed as props
  const wrapper = shallow(
    <Container store={store} />
);
  expect(wrapper.props().res).toBe;
});
it('mapdispatchtoprops',()=>{
  const initialState = {
    res: {}
};
  const store = mockStore(initialState);
  const actions = store.getActions();
  expect(actions).toEqual([ { type: 'FETCH_ABILITIES' }] );
})
    // it('mapStateToProps should return the right value', () => {
     
    //     const initialState = {
    //       event: {
    //       res: ['torrent'],
    //       }
    //     };
    //     const mockStore = configureStore();
    //     const store = mockStore(initialState);
    
    //     const wrapper = shallow(<Container store={store} res={[]} />);
    //     // console.log(wrapper.instance().res,"huiuiui");
    //     expect(wrapper.props().store.regionReducer().res).toBe({});
    //   });
      it('mapstatetoprops',()=>{
        const initialState = {
          
          res: {},
          
        };
        expect(mapStateToProps(initialState.res)).toEqual({})
        // const wrapper = shallow(<Container/>)
        // wrapper.
      })
    //   it('should roll the dice again when button is clicked', () => {
    //     const initialState = {
    //         res: [
    //           "torrent"
    //         ]
    //       };
    //     const mockStore = configureStore();
    //     const store = mockStore(initialState);
    //     const wrapper = shallow(<Container store={store}  />);
    //     // test that the component events dispatch the expected actions 
    //     wrapper.simulate('fetchabilities');

    //     const actions = store.getActions();
    //     expect(actions).toEqual([ { type: 'FETCH_ABILITIES' } ]);
    // });
})