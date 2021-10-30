// We need to import React to make this const a component
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";
import Login from "./user/Login";

const App = () => {
  // This container pass the layout at children and it will going to render it here, below the Header
  return (
    <Router>
      <Layout>
        <Switch>
          {/*
           * Login Page
           */}
          <Route path="/login">
            <Login />
          </Route>
          {/*
           * Default Page
           */}
          <Route exact path="/">
            <BookContainer />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

// Export to outside as 'App' to the main file index.jsx
export default App;
