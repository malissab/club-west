import React from "react";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';



export default function LoginForm({ setIsUser, handleChange }) {
 

    const initialValues={
        username:'',
        password: ''
    }

    const navigate = useNavigate();

      function handleSubmit(values) {
       
        fetch("/login", {
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

    //   const validationSchema = Yup.object.shape({
    //               username: Yup.string()
    //                 .required('Username is required')
    //                 .min(5, 'Username must be at least 5 characters'),
    //               email: Yup.string()
    //                 .required('Email is required')
    //                 .email('Invalid email address'),
    //               password: Yup.string()
    //                 .required('Password is required')
    //                 .min(6, 'Password must be at least 6 characters'),
    //               password_confirmation: Yup.string()
    //                 .required('Confirm Password is required')
    //                 .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    //               acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
    //             });
    
      
      const avatarStyle={ backgroundColor: 'pink', width: 60, height: 60 }
      const iconStyle={ color:'white', width: 45, height: 45 }
      const textFields={ width: '80%', margin: 20}
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

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
                    <Form>
            <Field as={TextField}
              label="Username"
              name="username"
              placeholder="Enter username"
              style={textFields}
              autoComplete="off"
              required
            />
            <Field as={TextField}
              label="Password"
              name="password"
              placeholder="Enter password"
              type="password"
              style={textFields}
              autoComplete="off"
              required
            />
            <Button type="submit" style={buttonStyle} variant="contained" >
              Log In
            </Button> 

                    </Form>
                )}
            </Formik>

            <Typography sx={{ paddingTop: 2}}>
              Don't have an account?
            <Link
                style={signUpStyle}
              component="button"
              variant="body2"
              onClick={() => handleChange("event", 1)}
            >
              Sign up!
            </Link>
          </Typography>
          </Grid>
      </Grid>
    );
}