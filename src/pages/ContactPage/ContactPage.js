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
import React, { useState } from "react";
import { connect } from "react-redux";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { setConversation } from "actions";
import AddContactDialog from "containers/AddContactDialog/AddContactDialog";

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

function ContactPage(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = (email) => {
    console.log(email);
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Contacts</Typography>
        <IconButton onClick={() => setOpen(true)}>
          <PersonAddIcon />
        </IconButton>
        <AddContactDialog open={open} onClose={handleClose} />
      </Box>
      <List disablePadding className={classes.list}>
        {props.user.current.contacts.map((contact) => (
          <ListItem
            key={contact._id}
            button
            onClick={() => props.setConversation(contact)}
          >
            <ListItemAvatar>
              <Avatar src="er" alt={contact.name} />
            </ListItemAvatar>
            <ListItemText primary={contact.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default connect((state) => ({ user: state.user }), { setConversation })(
  ContactPage
);
