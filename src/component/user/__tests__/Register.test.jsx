import React from "react";
import renderWithRedux from "../../../util/testUtil";
import Register from "../Register";

jest.mock("../../../module/user/userAction");

describe("Register form", () => {
  // Just check if these elements are present in the Document web page
  it("should exist name, email, password fields and regster button", async () => {
    const { getByLabelText, getByText } = renderWithRedux(<Register />, {});

    expect(getByLabelText("Enter email address")).toBeInTheDocument();
    expect(getByLabelText("Enter password")).toBeInTheDocument();
    expect(getByLabelText("Enter username")).toBeInTheDocument();
    expect(getByText("Register")).toBeInTheDocument();
  });
});
