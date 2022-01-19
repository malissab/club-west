import React from 'react';
import ItemCard from './ItemCard';
import Grid from '@mui/material/Grid';



export default function ItemContainer({ getItems, setGetItems }) {

  // const navigate = useNavigate()
  const allItems = getItems.map((item) => <ItemCard key={item.id} getItems={getItems} setGetItems={setGetItems} 
  id={item.id} name={item.name} description={item.description} image_url={item.image_url} price={item.price}/>)
    console.log(allItems);
  return (
    <div>
      <Grid sx={{ flexGrow: 4,
        marginTop: 5, 
        padding: 10, 
        columnGap: 10, 
        rowGap: 8, 
        justifyContent: "center"}} container spacing={2}>
      {allItems}
      </Grid>
    </div>
  );
}