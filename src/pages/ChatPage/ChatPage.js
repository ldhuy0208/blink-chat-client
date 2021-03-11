import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PreviewMessage from "components/PreviewMessage/PreviewMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2, 2),
  },
  list: {
    height: "100%",
    overflow: "auto",
  },
  badge: {
    backgroundColor: "green",
  },
  button: {
    borderRadius: 10,
  },
}));

function SettingPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Chats</Typography>
        <IconButton edge="end">
          <MoreVertIcon />
        </IconButton>
      </Box>

      <List disablePadding className={classes.list}>
        <ListSubheader>Recent</ListSubheader>
        <PreviewMessage
          name="Lee Van Luyen"
          online
          typing
          selected
          imageContent
          text="asda asd asd asdasdasdsaasdaasdas"
        />
        <PreviewMessage
          name="Lee Van Luyen"
          online
          typing
          imageContent
          text="asda asd asd asdasdasdsaasdaasdas"
        />
      </List>
    </div>
  );
}

export default SettingPage;
