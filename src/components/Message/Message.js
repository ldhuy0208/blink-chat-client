import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateAreas: `
      "time   time    time"
      "avatar content more"
      ".      name    .   "`,
    gridTemplateColumns: "auto auto 1fr",
    "&:not(:last-of-type)": {
      marginBottom: theme.spacing(1),
    },
  },
  rootSelf: {
    gridTemplateAreas: `
      "time   time    time"
      "more   content avatar"
      ".      name    ."
    `,
    gridTemplateColumns: "1fr auto auto",
  },
  time: {
    gridArea: "time",
    marginBottom: theme.spacing(1),
    fontSize: 11,
    fontWeight: 300,
    letterSpacing: 0.5,
  },
  avatar: {
    gridArea: "avatar",
    alignSelf: "end",

    border: `1px solid ${theme.palette.divider}`,
  },
  content: {
    gridArea: "content",

    padding: theme.spacing(1, 2),
    marginLeft: theme.spacing(1),
    maxWidth: theme.spacing(50),

    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(2),
  },
  contentSelf: {
    marginLeft: 0,
    marginRight: theme.spacing(1),

    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  name: {
    gridArea: "name",

    marginLeft: theme.spacing(3),

    fontSize: 13,
    fontWeight: 400,
    letterSpacing: 0.2,
  },
  nameSelf: {
    justifySelf: "end",

    marginLeft: 0,
    marginRight: theme.spacing(3),
  },
  more: {
    gridArea: "more",

    justifySelf: "start",
    alignSelf: "center",

    marginLeft: theme.spacing(1),
  },
  moreSelf: {
    justifySelf: "end",

    marginLeft: 0,
    marginRight: theme.spacing(1),
  },
}));
function Message({ content, self, name, time }) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, self && classes.rootSelf)}>
      <Typography className={classes.time} align="center">
        {time}
      </Typography>
      <Avatar
        className={classes.avatar}
        src="https://cdn.dribbble.com/users/2202649/avatars/small/aabdaf0bd1736d0d54828bb66c5b71b1.png?1613226731"
      />
      <div className={clsx(classes.content, self && classes.contentSelf)}>
        <Typography className={classes.contentText}>{content}</Typography>
      </div>
      <Typography className={clsx(classes.name, self && classes.nameSelf)}>
        {name}
      </Typography>
      <IconButton
        className={clsx(classes.more, self && classes.moreSelf)}
        size="small"
      >
        <MoreHoriz />
      </IconButton>
    </div>
  );
}

export default Message;
