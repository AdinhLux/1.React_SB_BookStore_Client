import { login } from "./userService";

export const loginAction = (email, password) => async (dispatch) => {
  // Issuing axios request to login api
  const response = await login(email, password);
  // Saving JWT inside local storage
  window.localStorage.setItem("bookstore-token", response.data.token);
  // Dispatchin Redux action
  dispatch({
    type: "USER_LOGIN",
    payload: response.data,
  });
};