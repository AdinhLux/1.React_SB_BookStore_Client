import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "../../module";

// Import your component for testing
import App from "../App";

describe("App component", () => {
  it("should render app with error", () => {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

    // asFragment' is a method that returns a DocumentFragment of our rendered component.
    const { asFragment } = render(
      <Provider
        store={createStoreWithMiddleware(
          reducers,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <App />
      </Provider>
    );

    // Testing with Jest snapshot
    // Snapshots are generally testing the initial rendering of a component
    //
    // toMatchSnapshot() is a function to compare the current snapshot with the newly generated output.
    expect(asFragment()).toMatchSnapshot();
  });
});
