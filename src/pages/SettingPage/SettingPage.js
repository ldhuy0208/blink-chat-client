import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonBase,
  Divider,
  FormControlLabel,
  IconButton,
  List,
  makeStyles,
  Paper,
  Switch,
  Typography,
} from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import { blueGrey, grey } from "@material-ui/core/colors";
import { connect } from "react-redux";
import { setTheme } from "actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(3, 2),
  },
  list: {
    height: "100%",
    overflow: "auto",
  },
}));

function SettingPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Settings</Typography>
        <IconButton edge="end">
          <MoreVertIcon />
        </IconButton>
      </Box>

      <Box display="flex" justifyContent="space-evenly">
        <Button onClick={() => props.setTheme("light")}>Light</Button>
        <Button onClick={() => props.setTheme("dark")}>Dark</Button>
      </Box>

      <List disablePadding className={classes.list}></List>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};
export default connect(mapStateToProps, { setTheme })(SettingPage);
