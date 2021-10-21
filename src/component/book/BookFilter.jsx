import { Paper, Box, Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./BookStyles";
import { getBooksByTitle } from "../../module/book/bookAction";

const BookFilter = () => {
  // Instantiate BookStyles
  const classes = styles();

  // Defining some internal states
  const [searchText, setSearchText] = useState("");

  /**
   * React's Hook gives the ability to use local component state, execute side effects, and more.
   *
   * React Redux includes its own custom hook APIs, which allow React components to subscribe to the Redux store and dispatch actions.
   *
   * useDispatch() : This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
   */
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(getBooksByTitle(searchText));
  };

  return (
    <Box className={classes.bookFilter}>
      <Paper className={classes.bookFilterPaper}>
        <Typography>Search Books Filter</Typography>
        <Box paddingTop={3} marginBottom={2}>
          <TextField
            placeholder="Enter book title"
            id="book-search"
            data-testid="book-title-input"
            label="Enter book title"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
          />
        </Box>

        <Button variant="contained" color="primary" onClick={handleSearchClick}>
          Search
        </Button>
      </Paper>
    </Box>
  );
};

export default BookFilter;
