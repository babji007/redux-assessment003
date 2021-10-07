// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// jest.mock("react-dom", () => ({ render: jest.fn() }));

// describe("Application root", () => {
//   it("should render without crashing", () => {
//     const div = document.createElement("div");
//     div.id = "root";
//     document.body.appendChild(div);
//     require("./index");
//     expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode><App /></React.StrictMode>,div);
//   });
// });

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import index from "./index";
import thunk from "redux-thunk";
import Store from "../src/App/src/Store/Store";
import { Provider } from "react-redux";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");

    div.id = "root";

    document.body.appendChild(div);

    require("./index.js");

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={Store}>
        <App />
      </Provider>,
      div
    );
  });
});
