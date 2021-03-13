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
import { Form, Formik, useFormik } from "formik";
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

function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },

    onSubmit: (values) => {
      axiosClient
        .post("/users/register", values)
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
      name: yup.string().min(6).max(50).required(),
    }),
  });

  return (
    <Container maxWidth="xs">
      <Box
        marginTop="10vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        component={Paper}
        padding={4}
      >
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Logo height={30} width={30} marginRight={0.5} />
          <Typography variant="h6">
            <b>BlinkChat</b>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Sign up</Typography>
        </Box>
        <Box marginBottom={1}>
          <Typography variant="body2">Sign up to continue to Blink</Typography>
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
              {...getPropsFormik(formik, "name")}
              {...fontSizeText}
              size="small"
              variant="outlined"
              label="Full name"
            ></TextField>
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <TextField
              {...getPropsFormik(formik, "password")}
              {...fontSizeText}
              size="small"
              variant="outlined"
              label="Password"
              type="password"
            ></TextField>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Button
              disabled={formik.isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign up
            </Button>
          </FormControl>
        </form>
        <Box marginTop={2}>
          <Typography variant="body2">
            Already have an account? <Link to="/login">Sign in now!</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
