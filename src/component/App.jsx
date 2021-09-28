// We need to import React to make this const a component
import React from "react";

import axios from "axios";
import baseUrl from "../config";

import Layout from "./layout/Layout";

// Creating a dummy component
const App = () => {
  // Endpoint of Book to get all books
  axios(`${baseUrl}/api/v1/books`).then((books) => {
    console.log(books);
  });

  return (
    <Layout>
      <div>My first component</div>
    </Layout>
  );
};

// Export to outside as 'App'
export default App;
