import React from "react";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";
import { Box, useTheme } from "@material-ui/core";
import logo from '../../assets/images/logo.svg';
function Logo() {
  const theme = useTheme();

  return (
    <Box width={50} height={50} clone >
      <img src={logo} />
    </Box>
  );
}

export default Logo;
