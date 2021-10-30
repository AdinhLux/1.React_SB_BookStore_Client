import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import makeStyle from "./LoginStyle";

const Login = () => {
  const classes = makeStyle();

  return (
    <form autoComplete="off" noValidate>
      <Box className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Typography variant="h4">Book store Login</Typography>
          <TextField
            className={classes.topMargin}
            name="email"
            id="email"
            data-testid="email-testid"
            label="Enter email address"
            variant="outlined"
            placeholder="Enter email address"
          />
          <TextField
            className={classes.topMargin}
            name="password"
            id="password"
            data-testid="password-testid"
            label="Enter password"
            variant="outlined"
            placeholder="Enter password"
          />
          <Button
            className={classes.topMargin}
            type="submit"
            variant="contained"
            color=" primary"
          >
            Login
          </Button>
        </Paper>
      </Box>
    </form>
  );
};

export default Login;
