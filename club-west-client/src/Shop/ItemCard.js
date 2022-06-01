
import {  Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';



export default function ItemCard({ id, name, image_url, price }) {




  const paperStyle={ height: '20vh', width: 250, margin: '20px auto'}

  return (
    <div>
      
      <Paper elevation={5} style={paperStyle}>
    
           <Link to={`/items/${id}`}>
            <img src={image_url} alt={name} width="100%" height="100%" />
            </Link>
            <h6>{name}</h6>
            <p>${price}</p>
  
      </Paper>
     
    </div>
  );
}
