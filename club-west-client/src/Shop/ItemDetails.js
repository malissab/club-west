import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import ReviewPost from "./ReviewPost";
import { useParams } from "react-router-dom";
import { postReview, selectedItem } from "../features/itemsSlice.js";
import { addToCart } from "../features/cartsSlice.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';



export default function ItemDetails() {
  const initialValues = {
    comment: "",
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


  const paperStyle={ height: '45vh', width: 465, margin: '50px', float: 'left'}


  return (
    <div style={{ paddingTop: 100, fontFamily: 'courierPrime, monospace' }}>
      
      <h1 style= {{ paddingLeft: 15}}>{item.name}</h1>
      <Paper elevation={20} style={paperStyle}>
      <img
        style={{ width: "100%", height: "100%" }}
        src={item.image_url}
        alt={item.name}
      />
      <div style={{ padding: 15}}>
       <Button
        variant="contained"
        size="small"
        onClick={() => handleAddToCart(item)}
        color='success'
      >
        Add To Cart
      </Button>
      </div>
      </Paper>
      <div style={{ paddingTop: 100}}>
      <h4>Description:</h4>
      <p>{item.description}</p>
      <h4>Price:</h4>
      <p>${item.price}</p>
      </div>
      <h4 style={{ paddingTop: 150, textDecoration: 'underline', textDecorationThickness: '2px'}}>Product Reviews</h4>
      {reviews?.length === 0 ? <p>This product has no reviews, log in to leave the first!</p> : <p>{reviewList}</p>}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field
              as={TextField}
              label="Comment on this item..."
              name="comment"
              placeholder="Comment on this item..."

            />
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              color='success'
              style= {{ marginLeft: 10}}
            >
              Post
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
