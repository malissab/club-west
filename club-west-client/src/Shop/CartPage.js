import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CartPage() {
    
    const navigate = useNavigate();

    return (
        <div>
            <h1>Cart is Empty</h1>
           
        <Button variant="outlined" size="small" onClick={() => navigate("/billing")}>
              Check Out
            </Button>
        </div>
    )
}