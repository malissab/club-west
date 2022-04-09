import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { updateReview, deleteReview } from "../features/itemsSlice.js";

export default function ReviewPost({ review }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  function handleUpdate() {
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...review,
        comment
      }),
    }).then((r) => r.json())
    .then(updatedReview => dispatch(updateReview(updatedReview)));
    handleClose();
  }

  function handleDelete(review) {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    }).then(dispatch(deleteReview(review)));
  }

  return (
    <>
      <h3 style={{ alignItems: 'right'}}>{review.comment}</h3>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        color='success'
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Review</DialogTitle>
        <DialogContent>
          <DialogContentText>Update your comment!</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            name="comment"
            label="Comment"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Post</Button>
        </DialogActions>
      </Dialog>
      <Button
        onClick={() => handleDelete(review)}
        type="submit"
        variant="contained"
        color='success'
        style={{ margin: 10}}
      >
        Delete
      </Button>
    </>
  );
}
