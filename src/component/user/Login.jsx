import React, { useEffect } from "react";
import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import makeStyle from "./LoginStyle";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../module/user/userAction";
import { getUserPromise } from "../../module/user/userSelector";
import { useSnackbar } from "notistack";

// Yup is a JavaScript schema builder for value parsing and validation
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimunm 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const classes = makeStyle();
  const dispatch = useDispatch();
  const loginPromise = useSelector(getUserPromise);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (loginPromise.isErrorOccured) {
      // Display error message
      enqueueSnackbar("Username or password incorrect", {
        variant: "error",
      });
    } else if (loginPromise.isFulfilled) {
       // Display success message
       enqueueSnackbar("Login success", {
        variant: "success",
      });
    }
  }, [loginPromise, enqueueSnackbar]);

  // Formik helps us to build forms in React
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Reading values from form fields and attempting Login
      dispatch(loginAction(values.email, values.password));
    },
  });

  return (
    <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
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
            value={formik.values.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          <TextField
            className={classes.topMargin}
            name="password"
            id="password"
            data-testid="password-testid"
            label="Enter password"
            variant="outlined"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
          <Button
            className={classes.topMargin}
            type="submit"
            variant="contained"
            color="primary"
            disabled={loginPromise.isPending}
          >
            Login
          </Button>
        </Paper>
      </Box>
    </form>
  );
};

export default Login;
