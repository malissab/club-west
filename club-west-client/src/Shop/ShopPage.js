import React, { useEffect } from 'react';
import ItemContainer from './ItemContainer';
import { useDispatch } from 'react-redux';
import { getItems } from '../features/itemsSlice.js'

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
            <ItemContainer />  
        </div>
    )
}