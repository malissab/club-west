import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

export default function NavBar() {

  const navigate = useNavigate();


  return (
    <Box sx={{ flexGrow: 1 }}>
         <ThemeProvider theme={darkTheme}>
      <AppBar >
        <Toolbar position='fixed'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Club West
          </Typography>
          <Button color="inherit" onClick={() => navigate("/home")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
          <Button color="inherit" onClick={() => navigate("/items")}>Shop</Button>
          <Button color="inherit" onClick={() => navigate("/connect")}>Connect</Button>
          <Button sx={{ marginLeft: 2 }} variant="contained" size="small" color="primary" onClick={() => navigate("/login")}>Login</Button>
          <Button sx={{ marginLeft: 2 }} variant="contained" size="small" color="primary" onClick={() => navigate("/signup")}>Sign Up</Button>
          <IconButton
            size="medium"
            color="inherit"
            onClick={() => navigate("/cart")} 
          >
            <ShoppingCartTwoToneIcon sx= {{ marginLeft: 4, width: 40, height: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}