// We need to import React to make this const a component
import React from "react";

import axios from "axios";
import baseUrl from "../config";

import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";

// Creating a dummy component
const App = () => {
  // Endpoint of Book to get all books
  axios(`${baseUrl}/api/v1/books`).then((books) => {
    console.log(books);
  });

  // This container pass the layout at children and it will going to render it here, below the Header
  return (
    <Layout>
      <BookContainer />
    </Layout>
  );
};

// Export to outside as 'App' to the main file index.jsx
export default App;
