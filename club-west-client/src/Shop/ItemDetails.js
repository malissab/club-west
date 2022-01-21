import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/index';




export default function ItemDetails({item}) {
    const navigate = useNavigate();
   

    // const [cartBtn, setCartBtn] = useState("Add to Cart")

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
        <div style={{ paddingTop: 200}}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>{item.description}</p>
            <img src={item.image_url} alt={item.name} />
            <h1>Product Reviews</h1>
            {reviews ? reviewList : <p>This product has no reviews, be the first!</p>}
            <Button variant="contained" size="small"  onClick={() => handleCart(item)}>
              Add To Cart
            </Button>
            <Button variant="contained" size="small"  onClick={() => handleDelCart(item)}>
              Remove
            </Button>
        </div>
    )
}