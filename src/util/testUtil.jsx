import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import reduxThunk from "redux-thunk";
import reducers from "../module";
import { SnackbarProvider } from "notistack";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// Custom render function to use with Redux: ui is a component, {} is an object
const renderWithRedux = (
  ui,
  { initialState, store = createStoreWithMiddleware(reducers, initialState) }
) => ({
  // ... is used to spread objects
  // https://stackoverflow.com/questions/54963457/react-js-spread-syntax
  ...render(
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>{ui}</SnackbarProvider>
    </Provider>
  ),
});

export default renderWithRedux;
