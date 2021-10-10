import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";

describe("BookContainer", () => {
  it("should render without error", () => {
    const { getByText } = renderWithRedux(<BookContainer />, {
      initialState: {

        // Assumoing we call the Reducer to store this 'books' data, let's see the display result in BookContainer.jsx
        bookReducer: {
          books: [
            {
              id: 1,
              title: "test title",
              description: "desc",
              releaseYear: 2019,
            },
          ],
        },
      },
    });

    // Remember the content we added in BookContainer.jsx ?
    expect(getByText("Here we will display all books.")).toBeInTheDocument();
  });
});
