import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import BookList from "../BookList";

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

  it("should render without error", () => {
    const books = [
      {
        id: 1,
        title: "test title",
        description: "desc",
        releaseYear: 2019,
      },
    ];
    const { getByText } = renderWithRedux(<BookContainer />, {
      initialState: {
        // Assumoing we call the Reducer to store this 'books' data, let's see the display result in BookContainer.jsx
        bookReducer: {
          books,
        },
      },
    });

    //      expect(BookList).toHaveBeenCalledWith({ books }, {});
    expect(getByText("mock Booklist component")).toBeInTheDocument();
  });
});
