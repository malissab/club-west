import React, { useEffect } from 'react';
import ItemContainer from './ItemContainer';
import { useDispatch } from 'react-redux';
import { getItems } from '../features/itemsSlice.js';
import Button from "@mui/material/Button";


export default function ShopPage() {

    const dispatch = useDispatch()




  // gets all items
  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(data =>  {
        dispatch(getItems(data))
    })
  }, [dispatch])





    return (
        <div> 
          <h2 style={{ marginTop: 90, marginLeft: 30, fontFamily: 'courierPrime'}}>[ shop ]</h2>
          
          <div style= {{textAlign: 'center'}}>
          <Button style= {{ margin: 5}} variant="outlined" color='success' size="small">All</Button>
          <Button style= {{ margin: 5}} variant="outlined" color='success' size="small">Hats</Button>
          <Button style= {{ margin: 5}} variant="outlined" color='success' size="small">Shirts</Button>
          <Button style= {{ margin: 5}} variant="outlined" color='success' size="small">Jackets</Button>
          <Button style= {{ margin: 5}} variant="outlined" color='success' size="small">Sweatshirts</Button>
          <Button style= {{ margin: 5}} variant="outlined" color='success' size="small">Shorts</Button>
          <Button style= {{ margin: 5}} variant="outlined" color='success' size="small">Pants</Button>
          </div>
            <ItemContainer />  
        </div>
    )
}


// 8:28