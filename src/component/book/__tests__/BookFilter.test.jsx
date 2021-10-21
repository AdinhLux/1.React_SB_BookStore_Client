import React from "react";
import BookFilter from "../BookFilter";
import renderWithRedux from "../../../util/testUtil";
import { fireEvent } from "@testing-library/dom";
import { getBooksByTitle } from "../../../module/book/bookAction";

// Mocking methods
jest.mock("../../../module/book/bookAction", () => ({
  getBooksByTitle: jest.fn(),
}));

describe("BookFilter", () => {
  it("should fire getBooksByTitle action on search button click", () => {
    const { getByLabelText, getByText } = renderWithRedux(<BookFilter />, {});

    // Mocking actions (we are not returning anything)
    getBooksByTitle.mockImplementation(() => (dispatch) => {});

    const textField = getByLabelText("Enter book title");

    // Simulate TextField reading
    fireEvent.change(textField, { target: { value: "test title" } });

    const searchButton = getByText("Search");

    // Simulate bouton click
    fireEvent.click(searchButton);

    expect(getBooksByTitle).toHaveBeenCalledWith("test title");
  });
});
