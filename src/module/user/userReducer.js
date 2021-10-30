// "initialState (INITIAL_BOOK_REDUCER_STATE)"
export const USER_INITIAL_STATE = {
  token: "",
  promise: {
    isPending: false,
    isFulfilled: false,
    isErrorOccured: false,
  },
};

/*
 * The reducer takes two parameters: state and action.
 * You need to have an initial value so that when Redux calls the reducer for the first time with undefined, it will return the "initialState".
 *
 * Then the function uses a switch statement to determine which type of action it's dealing with.
 * If there is an unknown action, then it should return the state, so that the application doesn't lose its current state.
 *
 * https://www.pluralsight.com/guides/how-to-write-redux-reducer
 */
const userReducer = (state = USER_INITIAL_STATE, action) => {
  // Return new state when "USER_LOGIN" action dispatch
};

export default userReducer;
