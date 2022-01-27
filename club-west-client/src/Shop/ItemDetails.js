import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import ReviewPost from "./ReviewPost";
import { useParams } from "react-router-dom";
import { postReview, selectedItem } from "../features/itemsSlice.js";
import { addToCart } from "../features/cartsSlice.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function ItemDetails() {
  const initialValues = {
    comment: "",
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const { id } = useParams();

  const dispatch = useDispatch();
  const item = useSelector((state) => state.items.selectedItem);
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  const reviews = item.reviews;
  const reviewList = reviews?.map((review) => (
    <ReviewPost key={review.id} review={review} />
  ));

  useEffect(() => {
    fetch(`/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(selectedItem(data));
      });
  }, [dispatch, id]);

  function handleSubmit(values) {
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, item_id: item.id }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((r) => {
          dispatch(postReview(r));
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
    <div style={{ paddingTop: 100, fontFamily: 'courierPrime' }}>
      <h1>{item.name}</h1>
      <h4>Price:</h4>
      <p>${item.price}</p>
      <h4>Description:</h4>
      <p>{item.description}</p>
      <img
        style={{ width: "50%", height: "20%" }}
        src={item.image_url}
        alt={item.name}
      />
      <h2>Product Reviews</h2>
      {reviews?.length === 0 ? <p>This product has no reviews, log in to leave the first!</p> : reviewList}
      
      <Button
        variant="contained"
        size="small"
        onClick={() => handleAddToCart(item)}
      >
        Add To Cart
      </Button>
      <Button
        variant="contained"
        size="small"
      >
        Remove
      </Button>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field
              as={TextField}
              label="Review"
              name="comment"
              placeholder="Write a review..."
             
            />
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
            >
              Post
            </Button>
            {/* <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Become a member of club west!
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description"> 
                  Sign up today!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => navigate("/login")} autoFocus>
                  Log in/Sign up
                  </Button>
                  <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}
