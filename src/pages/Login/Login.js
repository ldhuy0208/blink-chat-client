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
import Logo from "components/Logo/Logo";
import React from "react";
import { Link } from "react-router-dom";

const fontSizeText = {
  inputProps: {
    style: {
      fontSize: 14,
    },
  },
  InputLabelProps: { style: { fontSize: 14 } },
};

function Login() {
  return (
    <Container maxWidth="xs">
      <Box className="mt-16 md:flex-row flex flex-col items-center  p-10" component={Paper}>
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
        <form>
          <FormControl margin="dense" fullWidth>
            <TextField
              {...fontSizeText}
              size="small"
              variant="outlined"
              label="Email"
            ></TextField>
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <TextField
              {...fontSizeText}
              size="small"
              variant="outlined"
              label="Password"
            ></TextField>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Button variant="contained" color="primary">
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
