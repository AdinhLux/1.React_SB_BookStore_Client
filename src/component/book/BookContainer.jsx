import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../../module/book/bookAction";
import React, { useEffect } from "react";
import {
  getBooksSelector,
  getBookPromiseSelector,
} from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import styles from "./BookStyles";
import BookList from "./BookList";
import { Skeleton } from "@material-ui/lab";

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
  const bookPromise = useSelector(getBookPromiseSelector);

  console.log("Book Container useSelector books: ", books);

  // Instantiate BookStyles
  const classes = styles();
  return (
    <Box className={classes.bookContainer}>
      <BookFilter />
      <Box className={classes.bookList}>
        {
          // Le's display Loader
          bookPromise.isPending && (
            <Box ml={5}>
              <Skeleton
                data-testid="book-loader"
                variant="rect"
                animation="pulse"
                width="80%"
                height={200}
              />
            </Box>
          )
        }
        {
          // Display error message
          bookPromise.isErrorOccured && (
            <div data-testid="book-error-messsage"> Error message ... </div>
          )
        }
        {
          // Display Data
          bookPromise.isFulfilled && <BookList books={books} />
        }
      </Box>
    </Box>
  );
};

export default BookContainer;
