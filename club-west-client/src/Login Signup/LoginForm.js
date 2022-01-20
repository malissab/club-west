import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';



export default function LoginForm({ setUser }) {
    // const [formData, setFormData] = useState ({
    //     username: " ",
    //     password: " "
    // });

    // const handleChange = (e) => {
    //     setFormData({
    //       ...formData,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
    //   function handleSubmit(e) {
    //     e.preventDefault();
    
    //     const userInfo = { ...formData };
    
    //     fetch("/users", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(userInfo),
    //     }).then((res) => {
    //       if (res.ok) {
    //         res.json().then((user) => {
    //           setUser(user);
    //         });
    //       } else {
    //         res.json().then((errors) => {
    //           console.error(errors);
    //         });
    //       }
    //     });
    //   }
    
      const navigate = useNavigate();
      const avatarStyle={ backgroundColor: 'pink', width: 60, height: 60 }
      const iconStyle={ color:'white', width: 45, height: 45 }
      const textFields={ width: '80%', margin: 30}
      const buttonStyle={color: 'pink', width: '80%', height: '5vh'}
      const signUpStyle={paddingLeft: 6, fontSize: 15}

    return (
      <Grid>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountCircleOutlinedIcon style={iconStyle} />
            </Avatar>
            <h2>Login</h2>
          </Grid>
          <Grid align="center">
            <TextField
              label="Username"
              placeholder="Enter username"
              style={textFields}
              autoComplete="off"
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              style={textFields}
              autoComplete="off"
              required
            />
            <Button type="submit" style={buttonStyle} variant="contained">
              Log In
            </Button>
            <Typography sx={{ paddingTop: 2}}>
              Don't have an account?
            <Link
                style={signUpStyle}
              component="button"
              variant="body2"
              onClick={() => navigate("/signup")}
            >
              Sign up!
            </Link>
          </Typography>
          </Grid>
      </Grid>

      //     <div>
      //     <form onSubmit={handleSubmit}>
      //   <label htmlFor="username">Username:</label>
      //   <input
      //     id="username-login-input"
      //     type="text"
      //     name="username"
      //     value={formData.username}
      //     onChange={handleChange}
      //   />
      //   <label htmlFor="password">Password:</label>
      //   <input
      //     id="password-login-input"
      //     type="password"
      //     name="password"
      //     value={formData.password}
      //     onChange={handleChange}
      //   />
      //   <button type="submit">Submit</button>
      // </form>

      //     </div>
    );
}