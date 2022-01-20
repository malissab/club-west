import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    
    const navigate = useNavigate();

    return (
        <>
        <h1>Cart Page</h1>
        <h1>Cart Page</h1>
        <h1>Cart Page</h1>
        <h1>Cart Page</h1>
        <h1>Cart Page</h1>

        <Button variant="outlined" size="small" onClick={() => navigate("/billing")}>
              Check Out
            </Button>
        </>
    )
}