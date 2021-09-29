import { combineReducers } from "redux";

/**
 *  The reducer is nothing but a pure function that takes currentState and Action and returns a new state. 
 *  A valid Reducer can return the current state. We have to create the Reducer before the store because it is needed for creating the store.
 */
export default combineReducers({
  bookReducers: () => [1, 2, 3, 4],
});