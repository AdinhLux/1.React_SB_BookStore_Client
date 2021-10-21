import axios from "axios";
import baseUrl from "../../config";

export const getBooksService = () => axios.get(`${baseUrl}/api/v1/books`);
export const getBooksByTitleService = (title) =>
  axios.get(`${baseUrl}/api/v1/books/${title}`);

// Before, as we had only one service, we call export defauly at the end
// Now we have 2 services, we export each of them
// export default getBooksService;
