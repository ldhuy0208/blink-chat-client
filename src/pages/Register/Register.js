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

function Register() {
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
              label="Full name"
            ></TextField>
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <TextField
              {...fontSizeText}
              size="small"
              variant="outlined"
              label="Password"
              type="password"
            ></TextField>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Button variant="contained" color="primary">
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
