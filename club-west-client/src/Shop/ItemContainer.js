import React from 'react';
import ItemCard from './ItemCard';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';



export default function ItemContainer() {

  const items = useSelector(state => state.items.itemsArr);
 
 
  const allItems = items.map((item) => <ItemCard key={item.id} id={item.id} name={item.name} 
  description={item.description} image_url={item.image_url} price={item.price} />)
  

    
  return (
    <div>
      <Grid sx={{ 
        marginTop: 2, 
        padding: 2, 
        columnGap: 4, 
        rowGap: 4, 
        justifyContent: "center"}} container spacing={4}>
      {allItems}
      </Grid>
    </div>
  );
}