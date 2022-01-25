import React, { useState, useEffect } from 'react';
import ItemContainer from './ItemContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../features/itemsSlice.js'

export default function ShopPage({ onAdd }) {

    const dispatch = useDispatch()




  // gets all items
  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(data =>  {
        dispatch(getItems(data))
    })
  }, [])


    return (
        <div> 
            <ItemContainer onAdd={onAdd} />  
        </div>
    )
}