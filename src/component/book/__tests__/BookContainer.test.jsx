import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import getBooksAction from "../../../module/book/bookAction";

/*
 * We need to mock the part of BookList because we don't want to render the actual booklist component.
 * We just want to check if BookList component is called with the desired list of books or not in our test (1/2)
 */
jest.mock("../BookList", () => () => <div>mock Booklist component</div>);

describe("BookContainer", () => {
  /*
   * We need to provide the fake implementation
   * Mock implementation is used to provide the fake implementations of components or any other functions
   * This implementation asserts the function better returns the desired output for the BookList component (2/2)
   *
   * UPDATE : in recent versions, ignore these 3 lines
   */
  //  beforeAll(() => {
  //    BookList.mockImplementation(() => <div>mock booklist comp</div>);
  //  });

  it("should render without error", async () => {
    const books = [
      {
        id: "1",
        title: "test title",
        description: "desc",
        releaseYear: 2019,
      },
    ];

    // Mocking actions
    jest.mock("../../../module/book/bookAction", () => ({
      type: "BOOKLIST",
      payload: books.data,
    }));

    renderWithRedux(<BookContainer />, {});

    () => {
      expect(jest.fn()).toHaveBeenCalledWith({ books }, {});
    };
  });

  // Test case for Loader
  it("should show Loader when pending is TRUE", () => {
    // Mocking actions
    jest.mock("../../../module/book/bookAction", () => ({
      type: "BOOKLISTPENDING",
    }));

    const { getByTestId } = renderWithRedux(<BookContainer />, {});

    // Test if book-loader is present in the .jsx file
    expect(getByTestId("book-loader")).toBeInTheDocument();
  });

  // Test case for error
  it("should show Error message when error occured", () => {
    // Mocking actions
    jest.mock("../../../module/book/bookAction", () => ({
      type: "BOOKLISTERROR",
    }));

    const { getByTestId } = renderWithRedux(<BookContainer />, {});

    expect(getByTestId("book-error-message")).toBeInTheDocument();
  });
});
