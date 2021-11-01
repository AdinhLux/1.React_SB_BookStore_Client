import { login } from "./userService";

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_PENDING" });

    // Issuing axios request to login api
    const response = await login(email, password);
    // Saving JWT inside local storage
    window.localStorage.setItem("bookstore-token", response.data.token);
    // Dispatchin Redux action
    dispatch({
      type: "USER_LOGIN",
      payload: response.data,
    });

    dispatch({ type: "USER_SUCCESS" });
  } catch {
    dispatch({ type: "USER_ERROR" });
  }
};

export const registerAction = (user) => (dispatch) => {
  try {
  } catch (error) {
  }
};
