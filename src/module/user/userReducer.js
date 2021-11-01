// "initialState (INITIAL_BOOK_REDUCER_STATE)"
export const USER_INITIAL_STATE = {
  token: window.localStorage.getItem("bookstore-token"),
  promise: {
    isPending: false,
    isFulfilled: false,
    isErrorOccured: false,
  },
  registerPromise: {
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
  switch (action.type) {
    // Login
    // =====
    case "USER_LOGIN": {
      return {
        ...state,
        token: action.payload.token,
      };
    }

    case "USER_PENDING": {
      return {
        ...state,
        promise: {
          isPending: true,
          isFulfilled: false,
          isErrorOccured: false,
        },
      };
    }

    case "USER_SUCCESS": {
      return {
        ...state,
        promise: {
          isPending: false,
          isFulfilled: true,
          isErrorOccured: false,
        },
      };
    }

    case "USER_ERROR": {
      return {
        ...state,
        promise: {
          isPending: false,
          isFulfilled: false,
          isErrorOccured: true,
        },
      };
    }

    // Register
    // ========
    case "USER_REGISTRY": {
      return {
        ...state,
        user: action.payload,
      };
    }

    case "USER_REGISTRY_PENDING": {
      return {
        ...state,
        registerPromise: {
          isPending: true,
          isFulfilled: false,
          isErrorOcurred: false,
        },
      };
    }

    case "USER_REGISTRY_SUCCESS": {
      return {
        ...state,
        registerPromise: {
          isPending: false,
          isFulfilled: true,
          isErrorOcurred: false,
        },
      };
    }

    case "USER_REGISTRY_ERROR": {
      return {
        ...state,
        registerPromise: {
          isPending: false,
          isFulfilled: false,
          isErrorOcurred: true,
        },
      };
    }

    case "USER_REGISTRY_RESET": {
      return {
        ...state,
        registerPromise: {
          isPending: false,
          isFulfilled: false,
          isErrorOccured: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
