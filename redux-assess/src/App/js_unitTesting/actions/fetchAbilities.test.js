import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchabilities } from "../../src/actions/fetchAbilities";
// import { testStore } from '../Utils';
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe("fetchabilities actions", () => {
  it("dispatches fetchabilities after a successfull API requets", () => {
    mock
      .onGet("https://pokeapi.co/api/v2/pokemon/wartortle")
      .reply(200, { res:{data: [{ name: "torrent" }, { name: "rain-dish" }]} });
    const newstate = store.dispatch(fetchabilities('wartortle')).then(() => {
      let expectedActions = [
        {
          type: "FETCH_ABILITIES",
          payload: { res:{ data: [{ name: "torrent" }, { name: "rain-dish" }]} },
        },
      ];

      expect(newstate).toEqual(expectedActions);
    });
  });
it("dispatches INVALID_REQST after a FAILED API requets", () => {
  // mock
  //   .onGet("https://pokeapi.co/api/v2/pokemon/ty")
  //   .reply(400, { error: { message: "error message" } });
  const newstate = store.dispatch(fetchabilities())
  .catch(() => {
    let expectedActions = [
      {
        type: "INVALID_REQST",
        payload: { error: { message: "error message" } },
      },
    ];
    expect(newstate).toEqual(expectedActions);
  });
});
})
