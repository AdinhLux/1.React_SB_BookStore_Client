import React from "react";
import { render } from "@testing-library/react";
import BookListItem from "../BookListItem";

describe("BookListItem", () => {
  // Create the test
  it("should render BookListItem without error", async () => {
    const book = {
      id: "1",
      title: "Test title TOTO",
      description: "desc TITI",
      releaseYear: 2019,
    };

    const { getByText, getAllByText } = render(<BookListItem book={book} />);

    // This item is present more than 1 time so we need to use 'getAllByText'
    expect(getAllByText("Test title TOTO")[0]).toBeInTheDocument();

    expect(getByText("desc TITI")).toBeInTheDocument();
    expect(getByText("2019")).toBeInTheDocument();
  });
});
