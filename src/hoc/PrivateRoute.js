import { Box, CircularProgress } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

function PrivateRoute(props) {
  const render = function () {
    if (props.user.loading) {
      return (
        <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      );
    }

    if (!props.user.current) return <Redirect to="/login" />;

    return props.children;
  };

  return <>{render()}</>;
}

export default connect((state) => ({ user: state.user }))(PrivateRoute);
