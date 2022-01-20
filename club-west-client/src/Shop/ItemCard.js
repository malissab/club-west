import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';




export default function ItemCard({ id, name, description, image_url, price }) {

  const navigate = useNavigate();
    
  return (
    <div>
        <Card
          raised
          sx={{ maxWidth: 385}}
        >
          <CardContent onClick={() => navigate(`/items/${id}`)}>
            <img src={image_url} alt={name} width="100%" />
            <Typography
              variant="headline"
              component="h2"
              color="#404040"
              sx={{ marginTop: 2 }}
            >
              {name}
            </Typography>
            <Typography component="p" color="primary" sx={{ marginTop: 2 }}>
              ${price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small" onClick={() => navigate("/cart")}>
              Add To Cart
            </Button>
          
          </CardActions>
        </Card>
     
    </div>
  );
}
