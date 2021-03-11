import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import SimpleBar from "simplebar-react";

const groups = [
  { id: 1, name: "General" },
  { id: 2, name: "General" },
  { id: 3, name: "General" },
  { id: 1, name: "General" },
  { id: 2, name: "General" },
  { id: 3, name: "General" },
  { id: 1, name: "General" },
  { id: 2, name: "General" },
  { id: 3, name: "General" },
  { id: 1, name: "General" },
  { id: 2, name: "General" },
  { id: 3, name: "General" },
  { id: 1, name: "General" },
  { id: 2, name: "General" },
  { id: 3, name: "cuoicung" },
];

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

function GroupPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Groups</Typography>
        <IconButton>
          <GroupAddRoundedIcon />
        </IconButton>
      </Box>
      <List disablePadding className={classes.list}>
        {groups.map((g) => (
          <ListItem button>
            <ListItemAvatar>
              <Avatar src="er" alt={g.name} />
            </ListItemAvatar>
            <ListItemText primary={`#${g.name}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default GroupPage;
