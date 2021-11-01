import { Box, Paper, Button, TextField, Typography } from "@material-ui/core";
import React from "react";

const Register = () => {
  return (
    <Box>
      <Typography>User Registration</Typography>
      <Paper>
        <TextField
          id="name"
          name="name"
          variant="outlined"
          label="Enter username"
        />
        <TextField
          id="email"
          name="email"
          variant="outlined"
          label="Enter email address"
        />
        <TextField
          id="password"
          name="password"
          variant="outlined"
          label="Enter password"
        />
        <Button>Register</Button>
      </Paper>
    </Box>
  );
};

export default Register;
