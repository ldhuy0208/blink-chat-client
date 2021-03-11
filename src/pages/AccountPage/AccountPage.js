import {
  Avatar,
  Badge,
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  List,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: '50%',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
  anchor: {
    right: "22%",
    bottom: "22%",
  },
}));

function AccountPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">My Profile</Typography>
        <IconButton edge="end">
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
          classes={{
            badge: classes.badge,
            anchorOriginBottomRightCircle: classes.anchor,
          }}
        >
          <Box width={80} height={80} marginBottom={2} clone>
            <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
          </Box>
        </Badge>
        <Typography>Le Huy</Typography>
        <FormControlLabel label="Active" control={<Switch color="primary" />} />
      </Box>
      <Divider/>
      <List disablePadding className={classes.list}>

      </List>
    </div>
  );
}

export default AccountPage;
