import React from "react";
import renderWithRedux from "../../../util/testUtil";
import Register from "../Register";
import { fireEvent } from "@testing-library/dom";

describe("Register form", () => {
  // Just check if these elements are present in the Document web page
  it("should exist name, email, password fields and regster button", async () => {
    const { getByLabelText, getByText } = renderWithRedux(<Register />, {});

    expect(getByLabelText("Enter email address")).toBeInTheDocument();
    expect(getByLabelText("Enter password")).toBeInTheDocument();
    expect(getByLabelText("Enter username")).toBeInTheDocument();
    expect(getByText("Register")).toBeInTheDocument();
  });

  it("should show required error message when register is clicked", async () => {
    const { findByText, getByText } = renderWithRedux(<Register />, {});

    // Submit Register form
    fireEvent.submit(getByText("Register"));

    expect(await findByText("Username is required")).toBeInTheDocument();
    expect(await findByText("Email is required")).toBeInTheDocument();
    expect(await findByText("Password is required")).toBeInTheDocument();
  });

  it("should show email, password invalid error message", async () => {
    const { findByText, getByText, getByLabelText } = renderWithRedux(
      <Register />,
      {}
    );

    fireEvent.change(getByLabelText("Enter email address"), {
      target: { value: "invalid email" },
    });
    fireEvent.change(getByLabelText("Enter password"), {
      target: { value: "pass" },
    });
    fireEvent.change(getByLabelText("Enter username"), {
      target: { value: "username" },
    });

    // Submit Register form
    fireEvent.submit(getByText("Register"));

    expect(await findByText("Enter a valid email")).toBeInTheDocument();
    expect(
      await findByText("Password should be of minimunm 8 characters length")
    ).toBeInTheDocument();
  });
});
