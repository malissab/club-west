import React, { useState, useEffect } from 'react';
import ItemContainer from './ItemContainer';

export default function ShopPage() {

    const [getItems, setGetItems] = useState([])


  // gets all items
  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(data =>  {
        setGetItems(data)
    })
  }, [])


    return (
        <div> 
            <ItemContainer getItems={getItems} setGetItems={setGetItems}/>  
        </div>
    )
}