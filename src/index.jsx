import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import App from "./component/App";
import reducers from "./module";

/**
 * Redux is simply a store to store the state of the variables in your app.
 * Redux creates a process and procedures to interact with the store so that components will not just update or read the store randomly.
 *
 * https://medium.com/swlh/what-is-redux-b16b42b33820
 *
 * Middleware extends the store's abilities, and lets you write async logic that interacts with the store.
 *
 * Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store,
 * and simple async logic like AJAX requests.
 *
 * To enable Redux Thunk, use applyMiddleware():
 */
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// Rendering component with ReactDOM to the index.html (in 'public' folder) in '<div id="root">'
/**
 *
 *  The reducer is nothing but a pure function that takes currentState and Action and returns a new state.
 *  A valid Reducer can return the current state. We have to create the Reducer before the store because it is needed for creating the store.
 *
 *  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() means that we add Redux DevTools Extension to our react-redux store
 */
ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
