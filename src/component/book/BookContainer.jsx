import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import getBooksAction from "../../module/book/bookAction";
import React, { useEffect } from "react";
import { getBooksSelector } from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import styles from "./BookStyles";

const BookContainer = () => {
  /**
   * React's Hook gives the ability to use local component state, execute side effects, and more.
   *
   * React Redux includes its own custom hook APIs, which allow React components to subscribe to the Redux store and dispatch actions.
   *
   * useDispatch() : This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
   */
  const dispatch = useDispatch();

  // With the Dispatch, we are making an API call to the server
  /**
   * At the time of rendering we again dispatch getBooksAction, leading to an infinite loop of API calls
   * We will dispatch data ONCE, using useEffect.
   *
   * 1st argument is a function, 2nd is a dependency
   * 
   * When 'dispatch' is changed, it will call useEffect. So it is going to call at one time
   */
  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  /**
   * When data is stored in the store, immediately the Selector is notified that data has been updated.
   * So, Book container is rendered with new data.
   */
  const books = useSelector(getBooksSelector);
  console.log("Book Container useSelector books: ", books);

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
