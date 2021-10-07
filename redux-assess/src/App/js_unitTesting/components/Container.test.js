import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import Container from "../../src/container/Container";
import configureMockStore from "redux-mock-store";
import { fetchAbilities } from "../../src/actions/fetchAbilities";
import { mapDispatchProps } from "../../../App/src/container/Container";
// import Store from "../../src/Store/Store";
const mockStore = configureMockStore();

describe("testing for container", () => {
 
  it("mapstatetoprops", () => {
    const initialState = {
      event: {
        res: {},
        error: {},
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Container store={store} />);
    expect(wrapper.props().res).toBe;
  });
  it("mapdispatch working", () => {
  const initialState = {
    event: {
      res: {
        abilities:{
          ability:{
            name:''
          }
        }
      },
      error: {},
    },
  };
  const store = mockStore(initialState);
  shallow(<Container store={store} content={[]}/>);
    const dispatch = function () {};
    mapDispatchProps(dispatch).fetchAbilities();
    expect(fetchAbilities).toEqual(undefined);
  });

});
