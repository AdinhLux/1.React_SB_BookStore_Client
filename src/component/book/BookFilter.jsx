import { Paper, Box, Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./BookStyles";
import { getBooksByTitle } from "../../module/book/bookAction";

const BookFilter = () => {
  // Instantiate BookStyles
  const classes = styles();

  // Defining some internal states
  const [searchText, setSearchText] = useState("");

  return (
    <Box className={classes.bookFilter}>
      <Paper className={classes.bookFilterPaper}>
        <Typography>Search Books Filter</Typography>
        <Box>
          <TextField
            placeholder="Enter book title"
            id="book-search"
            data-testid="book-title-input"
            label="Enter book title"
            variant="outlined"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => getBooksByTitle(searchText)}
        >
          Search
        </Button>
      </Paper>
    </Box>
  );
};

export default BookFilter;
