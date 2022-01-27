import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, grandTotal } from "../features/cartsSlice";


export default function CartPage() {


  const cart = useSelector((state) => state.cart);
  const handleRemove = (cartItem) => {
    dispatch(deleteFromCart(cartItem))
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(grandTotal())
  }, [cart, dispatch]);

  return (
    <div style={{ paddingTop: 100, fontFamily: 'courierPrime' }}>
      <h2>[ cart ]</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your Cart is Empty.</p>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate("/items")}
          >
            Start Shopping
          </Button>
        </div>
      ) : (
        <div>
          {cart.cartItems?.map((cartItem) => (
            <div key={cartItem.id}>
              <div>
                <img style={{ width: '40%', height: '40%'}} src={cartItem.image_url} alt={cartItem.name} />
                <div>
                  {cartItem.name}${cartItem.price}
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleRemove(cartItem)}
                  >
                    Remove
                  </Button>
                </div>
                <div>${cartItem.price * cartItem.cartQuantity}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
      <Button
        variant="outlined"
        size="small"
        onClick={() => navigate("/items")}
      >
        Return To Shop
      </Button>
          <span>Total</span>
          <span>${cart.cartTotalAmount}</span>
      </div>
      <Button
        variant="outlined"
        size="small"
        onClick={() => navigate("/billing")}
      >
        Check Out
      </Button>
    </div>
  );
}
