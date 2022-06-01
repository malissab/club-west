
import {  Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';



export default function ItemCard({ id, name, image_url, price }) {




  const paperStyle={ height: '20vh', width: 230, margin: '20px auto'}

  return (
    <div>
      
      <Paper elevation={3} style={paperStyle}>
    
           <Link to={`/items/${id}`}>
            <img src={image_url} alt={name} width="100%" height="100%" />
            </Link>
            <div className='card-details' style={{ fontFamily: 'courierPrime, monospace'}}>
            <h6>{name}</h6>
            <h6>${price}</h6>
            </div>
  
      </Paper>
     
    </div>
  );
}
