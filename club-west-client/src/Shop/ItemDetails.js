import React from 'react';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/index';




export default function ItemDetails({item}) {
   
    const initialValues={
        comment:''
    }

    function handleSubmit(values) {
       
        fetch("/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
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

//       function handleUpdate(values) {
        
//         fetch("/reviews", {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             comment: comment
//           }),
//         })
//           .then((r) => r.json())
//           .then(() => ());
//       }
//     }

//       function handleDelete(values) {
//         fetch(`/reviews/${id}`, {
//       method: "DELETE",
//     })
//       .then((r) => r.json())
//       .then(() => ());
//   }

      

   

    const dispatch = useDispatch();

    const handleCart = (item) => {
        dispatch(addCart(item));
    }
    const handleDelCart = (item) => {
        dispatch(delCart(item));
    }

    const reviews = item.reviews
    const reviewList = reviews?.map((review) => <h3>{review.comment}</h3>)
    return(
        <div style={{ paddingTop: 100}}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>{item.description}</p>
            <img src={item.image_url} alt={item.name} />
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
            <Button type="submit" variant="contained" >
              Edit
            </Button> 
            <Button type="submit" variant="contained" >
              Delete
            </Button> 

                    </Form>
                )}
            </Formik>
        </div>
    )
}