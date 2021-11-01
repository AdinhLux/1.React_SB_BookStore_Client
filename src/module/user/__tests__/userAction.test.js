import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import axios from "axios";
import { loginAction, registerAction } from "../userAction";

// Mocking Axios requests
jest.mock("axios");
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe("Login Action", () => {
  // Will be executed before each test cases
  beforeEach(() => {
    // Mocking axios request (we are not going to issue requests to the server)
    axios.post.mockImplementation(() => {
      return Promise.resolve({
        data: {
          token: "jwt token",
        },
      });
    });
  });

  it("should able to dispatch and save in local storage", async () => {
    // Setting store with empty objects
    const store = mockStore({});

    await store.dispatch(loginAction("email", "password"));
    const actions = store.getActions();

    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: "USER_LOGIN",
      payload: {
        token: "jwt token",
      },
    });
  });

  it("should dispatch user action during register", async () => {
    // Setting store with empty objects
    const store = mockStore({});

    axios.post.mockImplementation(() => {
      return Promise.resolve({
        data: "some UUID",
      });
    });

    await store.dispatch(
      registerAction({
        name: "name",
        email: "email",
        password: "password",
      })
    );
    const actions = store.getActions();

    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: "USER_REGISTER",
      payload: {
        id: "some UUID",
        name: "name",
        email: "email",
        password: "password",
      },
    });
  });
});
