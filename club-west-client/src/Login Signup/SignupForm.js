import React from "react";
import { Formik, Form, Field } from 'formik';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';


export default function SignupForm({ setIsUser, handleChange }) {
    const navigate = useNavigate();
    
    const initialValues = {
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
      };
      function handleSubmit(values) {
       
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setIsUser(user);
              navigate("/home");
            });
          } else {
            res.json().then((errors) => {
              console.error(errors);
            });
          }
        });
      }
      const avatarStyle={ backgroundColor: '#855723', width: 60, height: 60 }
      const iconStyle={ color:'white', width: 45, height: 45 }
      const textFields={ width: '80%', margin: 10}
      const buttonStyle={color: 'white', width: '80%', height: '5vh', fontFamily: 'courierPrime'}
      const signUpStyle={paddingLeft: 6, fontSize: 15, fontFamily: 'courierPrime'}
    

    return (
          <div>
        <Grid>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountCircleOutlinedIcon style={iconStyle} />
            </Avatar>
            <div style={{fontFamily: 'courierPrime', paddingTop: 5}}>
            <h3>Sign Up</h3>
            <h5>Create an account.</h5>
            </div>
          </Grid>
          <Grid align="center">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
                    <Form>
          <Field as={TextField}
              label="Email"
              name="email"
              placeholder="Enter email"
              style={textFields}
              required
            />
            <Field as={TextField}
              label="Username"
              name="username"
              placeholder="Enter username"
              style={textFields}
           
              required
            />
            <Field as={TextField}
              label="Password"
              name="password"
              placeholder="Enter password"
              type="password"
              style={textFields}
        
              required
            />
            <Field as={TextField}
              label="Password Confirmation"
              name="password_confirmation"
              placeholder="Enter password confirmation"
              type="password"
              style={textFields}
            
              required
            />
            <Button type="submit" style={buttonStyle} variant="contained" color="success">
              Sign Up
            </Button>
            </Form>
                )}
            </Formik>
            <Typography sx={{ paddingTop: 2, fontFamily: 'courierPrime'}}>
              Already have an account?
            <Link
                style={signUpStyle}
              component="button"
              variant="body2"
              onClick={() => handleChange("event", 0)}
            >
              Log In!
            </Link>
          </Typography>
          </Grid>
      </Grid>



          </div>
    )
}