import userReducer, { USER_INITIAL_STATE } from "../userReducer";

describe("userReducer test", () => {
  it("should return new state for login user action", () => {
    const newState = userReducer(USER_INITIAL_STATE, {
      type: "USR_LOGIN",
      payload: {
        token: "jwt token",
      },
    });

    // Asserting new state
    expect(newState).toEqual({
      ...USER_INITIAL_STATE,
      token: "jwt token",
    });
  });
});
