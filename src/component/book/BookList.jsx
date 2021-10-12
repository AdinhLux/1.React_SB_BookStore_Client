import React from "react";
import Proptypes from "prop-types";
import { Box } from "@material-ui/core";
import styles from "./BookStyles";

/*
 * In this component we will receive books as props, so let's define the props type
 */
const propTypes = {
  books: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      title: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired,
      releaseYear: Proptypes.number.isRequired,
    })
  ).isRequired,
};

const BookList = ({ books }) => {
  const classes = styles();
  return (
    <Box className={classes.bookList}>
      {books.map((book) => (
        <div key={book.id}>{book.id}</div>
      ))}
    </Box>
  );
};

BookList.propTypes = propTypes;

export default BookList;
