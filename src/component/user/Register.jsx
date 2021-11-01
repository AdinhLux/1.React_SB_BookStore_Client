import { Box, Paper, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

// Yup is a JavaScript schema builder for value parsing and validation
const validationSchema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be of minimunm 8 characters length"),
});

const Register = () => {
  // Formik helps us to build forms in React
  const registerForm = useFormik({
    validationSchema,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box>
      <Typography>User Registration</Typography>
      <form autoComplete="off" noValidate onSubmit={registerForm.handleSubmit}>
        <Paper>
          <TextField
            id="name"
            name="name"
            variant="outlined"
            label="Enter username"
            value={registerForm.values.name}
            onChange={registerForm.handleChange}
            helperText={registerForm.touched.name && registerForm.errors.name}
            error={
              registerForm.touched.name && Boolean(registerForm.errors.name)
            }
          />
          <TextField
            id="email"
            name="email"
            variant="outlined"
            label="Enter email address"
            value={registerForm.values.email}
            onChange={registerForm.handleChange}
            helperText={registerForm.touched.email && registerForm.errors.email}
            error={
              registerForm.touched.email && Boolean(registerForm.errors.email)
            }
          />
          <TextField
            id="password"
            name="password"
            variant="outlined"
            label="Enter password"
            value={registerForm.values.password}
            onChange={registerForm.handleChange}
            helperText={
              registerForm.touched.password && registerForm.errors.password
            }
            error={
              registerForm.touched.password &&
              Boolean(registerForm.errors.password)
            }
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default Register;
