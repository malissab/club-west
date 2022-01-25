import React from 'react';
import ItemCard from './ItemCard';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';


export default function ItemContainer() {

  const items = useSelector(state => state.items.itemsArr);

  // const navigate = useNavigate()
  const allItems = items.map((item) => <ItemCard key={item.id} id={item.id} name={item.name} 
  description={item.description} image_url={item.image_url} price={item.price}/>)
  
    
  return (
    <div>
      <Grid sx={{ flexGrow: 4,
        marginTop: 5, 
        padding: 8, 
        columnGap: 3, 
        rowGap: 3, 
        justifyContent: "center"}} container spacing={2}>
      {allItems}
      </Grid>
    </div>
  );
}