import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { delCart } from '../redux/index';

export default function CartPage() {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()
    // const handleDel = (item) => {
    //     dispatch(delCart(item))
    // }

    const navigate = useNavigate();

    // const cartItems = (cartItem) => {
    //     console.log(cartItem)
    //     return (
    //         <div key={cartItem.id}>
    //        <Button onClick={() => handleDel(cartItem)} variant="outlined" size="small">Delete</Button>
    //         <img src={cartItem.img} alt={cartItem.name} />
    //         </div>

    //     )
    // }
    return (
        <div>
            <h1>Cart is Empty</h1>
           {/* {state.length !== 0 && state.map(cartItems)} */}
           
        <Button variant="outlined" size="small" onClick={() => navigate("/billing")}>
              Check Out
            </Button>
        </div>
    )
}