import {
  Avatar,
  Badge,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
  },
  green: {
    backgroundColor: "green",
  },
  badge: {
    position: "static",
    marginTop: theme.spacing(0.5),
  },
  anchorOriginTopRightRectangle: {
    transform: "none",
  },
}));

function PreviewMessage({ selected, typing, imageContent, online, text }) {
  const classes = useStyles();
  return (
    <ListItem selected={selected} classes={{ button: classes.root }} button>
      <ListItemAvatar>
        {online ? (
          <Badge
            overlap="circle"
            variant="dot"
            classes={{ badge: classes.green }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar />
          </Badge>
        ) : (
          <Avatar />
        )}
      </ListItemAvatar>
      <ListItemText primary="Le Van Luyen" secondary={text} />
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Typography variant="caption">10h30</Typography>
        <Badge
          classes={{
            badge: classes.badge,
            anchorOriginTopRightRectangle:
              classes.anchorOriginTopRightRectangle,
          }}
          badgeContent="3"
          max={99}
          color="secondary"
        />
      </Box>
    </ListItem>
  );
}

export default PreviewMessage;
