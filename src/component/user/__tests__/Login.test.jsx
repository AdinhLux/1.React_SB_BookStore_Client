import { fireEvent, wait, waitFor } from "@testing-library/dom";
import React from "react";
import renderWithRedux from "../../../util/testUtil";
import Login from "../Login";
import { loginAction } from "../../../module/user/userAction";

jest.mock("../../../module/user/userAction");

describe("Login test", () => {
  // In case of email or password is empty
  it("should show required ero message for email and password", async () => {
    const { findByText } = renderWithRedux(<Login />, {});
    const submitBtn = await findByText("Login");

    // Simulate submit event
    fireEvent.submit(submitBtn);

    expect(await findByText("Email is required")).toBeInTheDocument();
    expect(await findByText("Password is required")).toBeInTheDocument();
  });

  // In case of email or password is wrong typed
  it("should show email and password invalid error message", async () => {
    const { findByText, getByLabelText } = renderWithRedux(<Login />, {});
    const emailField = getByLabelText("Enter email address");
    const passwordField = getByLabelText("Enter password");
    const submitBtn = await findByText("Login");

    // Simulate field typing
    fireEvent.change(emailField, { target: { value: "Invalid email" } });
    fireEvent.change(passwordField, { target: { value: "wrongP" } });

    // Simulate submit event
    fireEvent.submit(submitBtn);

    expect(await findByText("Enter a valid email")).toBeInTheDocument();
    expect(
      await findByText("Password should be of minimunm 8 characters length")
    ).toBeInTheDocument();
  });

  // Success test case
  it("should call Login action when email and password are valid", async () => {
    const { findByText, getByLabelText } = renderWithRedux(<Login />, {});
    const emailField = getByLabelText("Enter email address");
    const passwordField = getByLabelText("Enter password");
    const submitBtn = await findByText("Login");

    // Mocking loginAction
    loginAction.mockImplementation(() => (dispatch) => {});

    // Simulate field typing
    fireEvent.change(emailField, { target: { value: "email@gmail.com" } });
    fireEvent.change(passwordField, { target: { value: "passwordvalid" } });

    // Simulate submit event
    fireEvent.submit(submitBtn);

    await waitFor(() => {
      expect(loginAction).toHaveBeenCalledWith(
        "email@gmail.com",
        "passwordvalid"
      );
    });
  });
});
