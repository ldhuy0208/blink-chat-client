import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { axiosClient } from "api/axiosClient";
import Logo from "components/Logo/Logo";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import getPropsFormik from "utils/getPropsFormik";
import * as yup from "yup";

const fontSizeText = {
  inputProps: {
    style: {
      fontSize: 14,
    },
  },
  InputLabelProps: { style: { fontSize: 14 } },
};

function Login() {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },

    onSubmit: (values) => {
      axiosClient
        .post("/users/login", values)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          formik.setSubmitting(false);
        });
    },

    validationSchema: yup.object().shape({
      email: yup.string().email().required().required(),
      password: yup.string().min(6).max(20).required(),
    }),
  });
  return (
    <Container maxWidth="xs">
      <Box
        className="mt-16 md:flex-row flex flex-col items-center  p-10"
        component={Paper}
      >
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Logo height={30} width={30} marginRight={0.5} />
          <Typography variant="h6">
            <b>BlinkChat</b>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Sign in</Typography>
        </Box>
        <Box marginBottom={1}>
          <Typography variant="body2">Sign in to continue to Blink</Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <FormControl margin="dense" fullWidth>
            <TextField
              {...getPropsFormik(formik, "email")}
              {...fontSizeText}
              size="small"
              variant="outlined"
              label="Email"
            ></TextField>
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <TextField
              {...getPropsFormik(formik, "password")}
              {...fontSizeText}
              size="small"
              variant="outlined"
              label="Password"
            ></TextField>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Button
              disabled={formik.isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
          </FormControl>
        </form>
        <Box marginTop={2}>
          <Typography variant="body2">
            Don't have an account? <Link to="/register">Sign up now!</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
