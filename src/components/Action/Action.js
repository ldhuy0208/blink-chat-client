import { ButtonBase, fade, makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  action: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.hint,
  },

  active: {
    color: theme.palette.primary.main,
    backgroundColor: fade(theme.palette.primary.main, 0.2),
  },

  buttonBase: {
    borderRadius: 10,
  },
}));

function Action({ action, children }) {
  const classes = useStyles();

  return (
    <Tooltip placement="top" title={action.tooltip} arrow>
      <ButtonBase className={classes.buttonBase}>
        <NavLink
          to={action.to}
          exact
          className={classes.action}
          activeClassName={classes.active}
        >
          {children}
        </NavLink>
      </ButtonBase>
    </Tooltip>
  );
}

export default Action;
