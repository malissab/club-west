import React, { useState, useEffect } from 'react';


export default function ItemDetails() {

    const [getItem, setGetItem] = useState([])


  // gets all items
  useEffect(() => {
    fetch(`/items/${id}`)
    .then(res => res.json())
    .then(data =>  {
        console.log(data)
    })
  }, [])


    return (
        <div> 
           
        </div>
    )
}