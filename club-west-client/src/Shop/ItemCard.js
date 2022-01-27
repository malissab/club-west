
import {  Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';



export default function ItemCard({ id, name, image_url}) {




  const paperStyle={ height: '50vh', width: 450, margin: '20px auto'}

  return (
    <div>

      <Paper elevation={20} style={paperStyle}>
    
           <Link to={`/items/${id}`}>
            <img src={image_url} alt={name} width="100%" height="100%" />
            </Link>
  
      </Paper>
     
    </div>
  );
}
