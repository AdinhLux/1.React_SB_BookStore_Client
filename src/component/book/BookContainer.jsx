import { Box } from "@material-ui/core";
import React from "react";
import BookFilter from "./BookFilter";

const BookContainer = () => {
  return (
    <Box>
      <BookFilter />
      <Box>Here we will display all books.</Box>
    </Box>
  );
};

export default BookContainer;
