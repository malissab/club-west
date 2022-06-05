import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';






const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fffee9',
      },
    },
  });

export default function NavBar({user, setUser}) {
 
  
  const { cartTotalQuantity } = useSelector(state => state.cart)


  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(res => {
          if (res.ok) {
            setUser(null)
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
           
          </IconButton>

        
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/images/c-west.png" alt="club-west-logo" style={{ width: '250px'}} />
          </Typography>
          <Button style={{ fontFamily: 'courierPrime, monospace' }} color="inherit" onClick={() => navigate("/home")}>Home</Button>
          <Button style={{ fontFamily: 'courierPrime, monospace' }} color="inherit" onClick={() => navigate("/about")}>About</Button>
          <Button style={{ fontFamily: 'courierPrime, monospace' }} color="inherit" onClick={() => navigate("/items")}>Shop</Button>
          <Button style={{ fontFamily: 'courierPrime, monospace' }} color="inherit" onClick={() => navigate("/connect")}>Connect</Button>
          <IconButton
                
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => navigate("/login")}
                color="inherit"
                
              >
                <AccountCircle sx= {{ width: 30, height: 30 }} />
              </IconButton>
              {user ? <><Typography style={{ fontFamily: 'courierPrime, monospace' }}>Welcome, {user.username}</Typography> <Button style={{ fontFamily: 'courierPrime, monospace' }} color="inherit" onClick={handleLogout}>Log out</Button></> : null} 
          <IconButton
            
            color="inherit"
            onClick={() => navigate("/cart")} 
          >
            <ShoppingCartTwoToneIcon sx= {{ width: 25, height: 25 }} />
            {cartTotalQuantity}
          </IconButton>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}





// {/* <Box sx={{ flexGrow: 1 }}>
// <ThemeProvider theme={darkTheme}>
//   <AppBar>
//     <Toolbar position="fixed">
//       <IconButton
//         size="large"
//         edge="start"
//         color="inherit"
//         aria-label="menu"
//         sx={{ mr: 2 }}
//       >
        
//       </IconButton>
//       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//         Club West
//       </Typography>
//       <Button color="inherit" onClick={() => navigate("/home")}>
//         Home
//       </Button>
//       <Button color="inherit" onClick={() => navigate("/about")}>
//         About
//       </Button>
//       <Button color="inherit" onClick={() => navigate("/items")}>
//         Shop
//       </Button>
//       <IconButton
//         aria-label="account of current user"
//         aria-controls="menu-appbar"
//         aria-haspopup="true"
//         onClick={() => navigate("/login")}
//         color="inherit"
//       >
//         <AccountCircle sx={{ width: 35, height: 35 }} />
//       </IconButton>
//       {user ? (
//         <>
//           <Typography>sup, {user.username}</Typography>{" "}
//           <Button color="inherit" onClick={handleLogout}>
//             Log out
//           </Button>
//         </>
//       ) : null}
//       <IconButton color="inherit" onClick={() => navigate("/cart")}>
//         <ShoppingCartTwoToneIcon sx={{ width: 30, height: 30 }} />
//         {cartTotalQuantity}
//       </IconButton>
//     </Toolbar>
//   </AppBar>
// </ThemeProvider>
// </Box> */}