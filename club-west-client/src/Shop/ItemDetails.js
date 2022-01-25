import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import ReviewPost from './ReviewPost';
import { useParams } from 'react-router-dom';
import { selectedItem } from '../features/itemsSlice.js'
import { addToCart } from '../features/cartsSlice.js'
import { useSelector } from 'react-redux';




export default function ItemDetails() {

  
  const initialValues={
   comment:'',
}
   
    const { id } = useParams();

    const dispatch = useDispatch();
    const item = useSelector(state => state.items.selectedItem);

    useEffect(() => {
      fetch(`/items/${id}`)
      .then(res => res.json())
      .then(data =>  {
          dispatch(selectedItem(data))
      })
    }, [])

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
    


    const reviews = item.reviews
    const reviewList = reviews?.map((review) => <ReviewPost key={item.id} review={review} />) 

    const handleAddToCart = (item) => {
      dispatch(addToCart(item));
    }


    return(
        <div style={{ paddingTop: 100}}>
          
            <h1>{item.name}</h1>
            <h4>Price:</h4>
            <p>${item.price}</p>
            <h4>Description:</h4>
            <p>{item.description}</p>
            <img style={{ width: '50%', height: '20%'}} src={item.image_url} alt={item.name} />
            <h2>Product Reviews</h2>
            Review: {reviews ? reviewList : <p>This product has no reviews, be the first!</p>}
            <Button variant="contained" size="small"  
            onClick={() => handleAddToCart(item)}>
              Add To Cart
            </Button>
            <Button variant="contained" size="small"  
            // nClick={() => handleDelCart(item)}>
            >
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