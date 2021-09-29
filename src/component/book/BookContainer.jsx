import { Box } from "@material-ui/core";
import React from "react";
import BookFilter from "./BookFilter";
import styles from "./BookStyles";

const BookContainer = () => {
  // Instantiate BookStyles
  const classes = styles();
  return (
    <Box className={classes.bookContainer}>
      <BookFilter />
      <Box className={classes.bookList}>Here we will display all books.</Box>
    </Box>
  );
};

export default BookContainer;
