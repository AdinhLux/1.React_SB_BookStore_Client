import { Paper, Box } from "@material-ui/core";
import React from "react";
import styles from "./BookStyles";

const BookFilter = () => {
  // Instantiate BookStyles
  const classes = styles();

  return (
    <Box className={classes.bookFilter}>
      <Paper className={classes.bookFilterPaper}>Book filter</Paper>
    </Box>
  );
};

export default BookFilter;
