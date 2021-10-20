// "initialState (INITIAL_BOOK_REDUCER_STATE)"
// 'export' will make this public (to be used in our Unit tests)
export const INITIAL_BOOK_REDUCER_STATE = {
  books: [],
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
const bookReducer = (state = INITIAL_BOOK_REDUCER_STATE, action) => {
  switch (action.type) {
    case "BOOKLIST": {
      /*
       * We're returning a brand new object rather than trying to change state.
       * We then use the spread operator to create a copy of the state.
       * Then we override the books property with the new value from action.payload.
       */
      return {
        ...state,
        books: action.payload,
      };
    }

    case "BOOKLISTPENDING": {
      return {
        ...state,
        promise: {
          isPending: true,
          isFulfilled: false,
          isErrorOccured: false,
        },
      };
    }

    case "BOOKLISTERROR": {
      return {
        ...state,
        promise: {
          isPending: false,
          isFulfilled: false,
          isErrorOccured: true,
        },
      };
    }

    case "BOOKLISTFULFILLED": {
      return {
        ...state,
        promise: {
          isPending: false,
          isFulfilled: true,
          isErrorOccured: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default bookReducer;
