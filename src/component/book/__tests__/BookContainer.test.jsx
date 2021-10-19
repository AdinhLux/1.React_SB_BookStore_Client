import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import BookList from "../BookList";
import { getBooksAction } from "../../../module/book/bookAction";

/*
 * We need to mock the part of BookList because we don't want to render the actual booklist component.
 * We just want to check if BookList component is called with the desired list of books or not in our test (1/2)
 */

// Mocking component
jest.mock("../BookList", () => jest.fn());

// Mocking methods
jest.mock("../../../module/book/bookAction", () => ({
  getBooksAction: jest.fn(),
}));

describe("BookContainer", () => {
  /*
   * We need to provide the fake implementation
   * Mock implementation is used to provide the fake implementations of components or any other functions
   * This implementation asserts the function better returns the desired output for the BookList component (2/2)
   */

  // Mocking component in all cases

  //  beforeAll(() => {
  //  });

  it("should render without error", () => {
    // Mocking component
    BookList.mockImplementation(() => <div>mock booklist comp</div>);

    const books = [
      {
        id: 1,
        title: 'test title',
        description: 'desc',
        releaseYear: 2019,
      },
    ];

    // Mocking actions
    getBooksAction.mockImplementation(() => (dispatch) => {
      dispatch({
        type: "BOOKLIST",
        payload: books,
      });
      dispatch({ type: "BOOKLISTFULFILLED" });
    });

    renderWithRedux(<BookContainer />, {});
    expect(BookList).toHaveBeenCalledWith({ books }, {});
  });

  // Test case for Loader
  it("should show Loader when pending is TRUE", () => {
    // Mocking actions
    getBooksAction.mockImplementation(() => ({
      type: "BOOKLISTPENDING",
    }));

    const { getByTestId } = renderWithRedux(<BookContainer />, {});

    // Test if book-loader is present in the .jsx file
    expect(getByTestId("book-loader")).toBeInTheDocument();
  });

  // Test case for error
  it("should show Error message when error occured", () => {
    // Mocking actions
    getBooksAction.mockImplementation(() => ({
      type: "BOOKLISTERROR",
    }));

    const { getByTestId } = renderWithRedux(<BookContainer />, {});
    expect(getByTestId("book-error-messsage")).toBeInTheDocument();
  });
});
