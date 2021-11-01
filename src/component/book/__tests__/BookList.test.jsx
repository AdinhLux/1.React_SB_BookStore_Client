import React from "react";
import { render } from "@testing-library/react";
import BookList from "../BookList";
import BookListItem from "../BookListItem";

// We don't want to render the actual BookList component because we are not testing BookLisItem in the BookList test (1/2)
jest.mock("../BookListItem", () => jest.fn());

describe("BookList", () => {
  // Return mock 'booklist'(2/2)
  //  beforeAll(() => {

  //  });

  // Prepare the data for books (2 instances)
  const books = [
    {
      id: "1",
      title: "test title",
      description: "desc",
      releaseYear: 2019,
    },
    {
      id: "2",
      title: "test title 2",
      description: "desc",
      releaseYear: 2020,
    },
  ];

  // Create the test
  it("render BookList without error", () => {
    BookListItem.mockImplementation(() => <div>bookListItem component</div>);

    render(<BookList books={books} />);

    // We have 2 instances of a book. For each of them we are going to call BookListItem
    // We check if BookListItem is called twice
    expect(BookListItem).toHaveBeenCalledTimes(2);

    // Also assert that BookListItem was called with first Book
    expect(BookListItem).toHaveBeenCalledWith({ book: books[0] }, {});

    // Also assert that BookListItem was called with second Book
    expect(BookListItem).toHaveBeenCalledWith({ book: books[1] }, {});
  });
});
