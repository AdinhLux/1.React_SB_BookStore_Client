import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import axios from "axios";
import getBooksAction from "../bookAction";
import { jsxEmptyExpression } from "@babel/types";

// Mocking Axios requests
jest.mock("axios");
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe("BookActions", () => {
  it("should able to dispatch success action", async () => {
    // Creating the store with empty initialState
    const store = mockStore({});

    // Promise.resolve will return an object with 'data' property which should contain a list of Books
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            title: "test title",
            description: "test description",
            releaseYear: 2018,
          },
        ],
      })
    );

    await store.dispatch(getBooksAction());

    const actions = store.getActions();
    expect(actions.length).toEqual(3);
    expect(actions[0]).toEqual({
      type: "BOOKLIST",
      payload: [
        {
          id: 1,
          title: "test title",
          description: "test description",
          releaseYear: 2018,
        },
      ],
    });
  });
});
