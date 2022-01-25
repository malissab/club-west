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
import AccountCircle from '@mui/icons-material/AccountCircle';



const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

export default function NavBar({ currentUser, setCurrentUser }) {

  

  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(res => {
          if (res.ok) {
            setCurrentUser(null)
          }
        })
  }


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
          <IconButton
                
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => navigate("/login" && "/signup")}
                color="inherit"
              >
                <AccountCircle sx= {{ width: 35, height: 35 }} />
              </IconButton>
              {currentUser ? <p>Welcome, {currentUser} <Button color="inherit" onClick={handleLogout}>Log out</Button></p>  : null} 
          <IconButton
            
            color="inherit"
            onClick={() => navigate("/cart")} 
          >
            <ShoppingCartTwoToneIcon sx= {{ width: 30, height: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}