import React from "react";
import PropTypes from "prop-types";
import makeStyles from "./BookStyles";
import { Avatar, Box, Paper, Typography } from "@material-ui/core";

/*
 * In this component we are going to pass the propTypes 'books'
 * So we need to define it
 */
const propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
};

// Inside BookListItem, we are going to create a view for the single book
const BookListItem = ({ book }) => {
  const classes = makeStyles();

  return (
    <Box>
      <Paper>
        <Avatar variant="square">{book.title}</Avatar>
        <Box>
          <Typography variant="h5">{book.title}</Typography>
          <Typography variant="h5">{book.description}</Typography>
          <Typography variant="h5">{book.releaseYear}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

// Assign these prototypes to BookListItem component
BookListItem.propTypes = propTypes;

export default BookListItem;
