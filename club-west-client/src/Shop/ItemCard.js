import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from 'react-router-dom';




export default function ItemCard({ id, name, description, image_url, price, renderDetails }) {

  const navigate = useNavigate();
    
  function displayDetails(id){
    
    renderDetails(id)
  }


  return (
    <div>
        <Card
          raised
          sx={{ maxWidth: 385}}
        >
          <CardContent>
          <Link to={`/items/${id}`}>
            <img onClick={() => displayDetails(id)} src={image_url} alt={name} width="100%" />
            </Link>
            {/* <Typography
              variant="headline"
              component="h2"
              color="#404040"
              sx={{ marginTop: 2 }}
            >
              {name}
            </Typography>
            <Typography component="p" color="primary" sx={{ marginTop: 2 }}>
              ${price}.00
            </Typography> */}
          </CardContent>
          <CardActions>
          
          </CardActions>
        </Card>
     
    </div>
  );
}
