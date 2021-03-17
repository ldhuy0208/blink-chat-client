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
import { setUser } from "actions";
import { axiosClient } from "api/axiosClient";
import Logo from "components/Logo/Logo";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import getPropsFormik from "utils/getPropsFormik";
import * as yup from "yup";
import { connect } from "react-redux";

const fontSizeText = {
  inputProps: {
    style: {
      fontSize: 14,
    },
  },
  InputLabelProps: { style: { fontSize: 14 } },
};

function Login(props) {
  const snack = useSnackbar();
  const history = useHistory();
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
          snack.enqueueSnackbar("Login successfully!", { variant: "success" });

          localStorage.setItem("token", result.data.token);

          props.setUser(result.data.user);

          history.push("/");
        })
        .catch((err) => {
          console.log(err);
          snack.enqueueSnackbar("Error: " + err.response.data.error.message, {
            variant: "error",
          });
        })
        .finally(() => {
          formik.setSubmitting(false);
        });
    },

    validationSchema: yup.object().shape({
      email: yup.string().email().required().required(),
      password: yup.string().min(6).max(20).required(),
    }),
  });

  useEffect(() => {
    if (!props.user.loading && props.user.current) {
      history.push("/");
    }
  }, [props.user]);

  return (
    <Container maxWidth="xs">
      <Box className="mt-16 flex flex-col items-center  p-10" component={Paper}>
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
            Don't have an account?{" "}
            <Link className="text-blue-500" to="/register">
              Sign up now!
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { setUser })(Login);
