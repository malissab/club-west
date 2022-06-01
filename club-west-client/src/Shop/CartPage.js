import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, grandTotal } from "../features/cartsSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const handleRemove = (cartItem) => {
    dispatch(deleteFromCart(cartItem));
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(grandTotal());
  }, [cart, dispatch]);

  return (
    <div style={{ paddingTop: 100, fontFamily: "courierPrime, monospace" }}>
      <h2>[ cart ]</h2>
      <Button
          variant="outlined"
          size="small"
          color='success'
          onClick={() => navigate("/items")}
          style={{ float: "left", margin: 10}}
        >
          Return To Shop
        </Button>
      {cart.cartItems.length === 0 ? (
        <div style={{ margin: 200, paddingLeft: 400}}>
          <p>Your Cart is Empty.</p>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate("/items")}
            color='success'
            style={{ marginLeft: 15}}
          >
            Start Shopping
          </Button>
        </div>
      ) : (
        <div>
          {cart.cartItems?.map((cartItem) => (
            <div key={cartItem.id}>
              <div style= {{ float: "left"}}>
                <img
                  style={{ width: "20%", height: "20%", margin: 30 }}
                  src={cartItem.image_url}
                  alt={cartItem.name}
                />
                <div style={{ float: "right"}}>
                  {cartItem.name}
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleRemove(cartItem)}
                    style={{ margin: 10 }}
                    color='success'
                  >
                    Remove
                  </Button>
                </div>
                <div style={{ float: "right", margin: 15}}> Price: ${cartItem.price * cartItem.cartQuantity}</div>
              </div>
            </div>
          ))}
        </div>
      )}
     
      <Button
        variant="contained"
        size="small"
        color='success'
        onClick={() => navigate("/billing")}
        style={{ margin: 10, float: "right"}}
      >
        Check Out
      </Button>
      <div style={{ float: "right", margin: 20}}>
        <span>Total: </span>
        <span>${cart.cartTotalAmount}</span>
      </div>
    </div>
  );
}
