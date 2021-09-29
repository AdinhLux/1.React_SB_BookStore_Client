import getBooksService from "./bookService";

// Calling Book Service
const getBooksAction = () => async (dispatch) => {
  try {
    const books = await getBooksService();

    // Once we receive data
    dispatch({
      type: "BOOKLIST",
      payload: books.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getBooksAction;