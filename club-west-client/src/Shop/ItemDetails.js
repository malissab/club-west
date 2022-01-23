import React from 'react';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/index';
import ReviewPost from './ReviewPost';
import { height } from '@mui/system';



export default function ItemDetails({item, setGetItem}) {
   
    const initialValues={
        comment:''
    }

    function handleSubmit(values) {
       
        fetch("/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...values, item_id: item.id}),
        }).then((res) => {
          if (res.ok) {
            res.json().then((r) => {
              console.log(r);
              
            });
          } else {
            res.json().then((errors) => {
              console.error(errors);
            });
          }
        });
      }

      

   

    const dispatch = useDispatch();

    const handleCart = (item) => {
        dispatch(addCart(item));
    }
    const handleDelCart = (item) => {
        dispatch(delCart(item));
    }

    const reviews = item.reviews
    const reviewList = reviews?.map((review) => <ReviewPost key={item.id} item={item} setGetItem={setGetItem} review={review} />) 
    return(
        <div style={{ paddingTop: 100}}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>{item.description}</p>
            <img style={{ width: '50%', height: '20%'}} src={item.image_url} alt={item.name} />
            <h1>Product Reviews</h1>
            Review: {reviews ? reviewList : <p>This product has no reviews, be the first!</p>}
            <Button variant="contained" size="small"  onClick={() => handleCart(item)}>
              Add To Cart
            </Button>
            <Button variant="contained" size="small"  onClick={() => handleDelCart(item)}>
              Remove
            </Button>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
                    <Form>
            <Field as={TextField}
              label="Review"
              name="comment"
              placeholder="Write a review..."
            />
            <Button type="submit" variant="contained" onClick={handleSubmit} >
              Post
            </Button> 

                    </Form>
                )}
            </Formik>
        </div>
    )
}