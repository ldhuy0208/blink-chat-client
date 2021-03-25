import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

export default function AddContactDialog({ open, onClose }) {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    onClose(email);
  };
  const handleClose = () => {
    onClose();
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Contact</DialogTitle>
      <DialogContent>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          label="Email"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="text">
          Close
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
