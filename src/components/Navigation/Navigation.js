import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Hidden, Paper } from "@material-ui/core";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import Action from "components/Action/Action";
import Logo from "components/Logo/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    background: theme.palette.background.paper,
    padding: theme.spacing(1),

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2, 1),
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",

      height: "100%",
    },
  },

  actions: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-evenly",
    },

    [theme.breakpoints.up("md")]: {
      flex: 0,
      flexDirection: "column",
      alignItems: "center",
    },
  },

  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const actions = [
  {
    tooltip: "Chats",
    to: "/chats",
    icon: <TextsmsOutlinedIcon />,
  },
  {
    tooltip: "Contacts",
    to: "/contacts",
    icon: <PersonOutlineIcon />,
  },
  {
    tooltip: "Groups",
    to: "/groups",
    icon: <PeopleOutlineIcon />,
  },
  {
    tooltip: "Settings",
    to: "/settings",
    icon: <SettingsOutlinedIcon />,
  },
];

export default function Navigation() {
  const classes = useStyles();

  const AccountAcction = () => (
    <Action
      action={{
        to: "account",
        tooltip: "Account",
      }}
    >
      <Avatar className={classes.avatar} />
    </Action>
  );

  return (
    <Paper className={classes.root}>
      <Hidden smDown>
        <Logo width={45} height={45} />
      </Hidden>
      <div className={classes.actions}>
        {actions.map((action, index) => (
          <Action key={index} action={action}>{action.icon}</Action>
        ))}
        <Hidden mdUp>
          <AccountAcction />
        </Hidden>
      </div>
      <Hidden smDown>
        <AccountAcction />
      </Hidden>
    </Paper>
  );
}
