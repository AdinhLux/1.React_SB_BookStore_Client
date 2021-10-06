import { combineReducers } from "redux";
import bookReducer from "./book/bookReducer";

/**
 * The reducer is nothing but a pure function that takes currentState and Action and returns a new state.
 * A valid Reducer can return the current state. We have to create the Reducer before the store because it is needed for creating the store.
 * 
 * As an application grows and can become complex, we can have multiple reducers each managing independent parts of the Web page state.
 * Using a combineReducers helps us to gather all reducers, managing the state f 1 component, and to export them to other JS files
 * 
 * See more here for more explanations : https://javascript.plainenglish.io/simple-application-of-redux-combinereducers-in-react-6ac3bbeabc4a
 */
export default combineReducers({
  bookReducer,
});