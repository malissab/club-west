import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { delCart } from '../redux/index';

export default function CartPage() {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()
    const handleDel = (item) => {
        dispatch(delCart(item))
    }
    console.log(state)

    const navigate = useNavigate();
    const cartItems = state.map((cartItem) => {
        return (
            <div key={cartItem.id}>
           <Button onClick={() => handleDel(cartItem)} variant="outlined" size="small">Delete</Button>
            <img style={{ width: '40%', height: '40%'}} src={cartItem.image_url} alt={cartItem.name} />
            <p>${cartItem.price}</p>
            </div>

        )
    }
    )
    return (
        <div>
            <h1>Cart is Empty</h1>
           {cartItems}
           
        <Button variant="outlined" size="small" onClick={() => navigate("/billing")}>
              Check Out
            </Button>
        </div>
    )
}