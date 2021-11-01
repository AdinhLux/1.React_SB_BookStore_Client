// We need to import React to make this const a component
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";
import Login from "./user/Login";
import { SnackbarProvider } from "notistack";
import Auth from "./Auth";
import Register from "./user/Register";

const App = () => {
  // This container pass the layout at children and it will going to render it here, below the Header
  return (
    <SnackbarProvider maxSnack={3}>
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
             * Register Page
             */}
            <Route path="/register">
              <Register />
            </Route>
            {/*
             * Default Page
             */}
            <Route exact path="/">
              <Auth>
                <BookContainer />
              </Auth>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </SnackbarProvider>
  );
};

// Export to outside as 'App' to the main file index.jsx
export default App;
