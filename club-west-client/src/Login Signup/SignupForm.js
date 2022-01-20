import React, { useState } from "react";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';


export default function SignupForm({ setUser }) {
//   const [formData, setFormData] = useState(null)

//     const initialValues = {
//         username: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//       };


//       const validationSchema = Yup.object.shape({
//           username: Yup.string()
//             .required('Username is required')
//             .min(5, 'Username must be at least 5 characters'),
//           email: Yup.string()
//             .required('Email is required')
//             .email('Invalid email address'),
//           password: Yup.string()
//             .required('Password is required')
//             .min(6, 'Password must be at least 6 characters'),
//           password_confirmation: Yup.string()
//             .required('Confirm Password is required')
//             .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
//           acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
//         });

//     const handleChange = (e) => {
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value,
//         });
//       };
//       function handleSubmit(e) {
//         e.preventDefault();
    
//         const userInfo = { ...formData };
    
//         fetch("/users", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userInfo),
//         }).then((res) => {
//           if (res.ok) {
//             res.json().then((user) => {
//               setUser(user);
//             });
//           } else {
//             res.json().then((errors) => {
//               console.error(errors);
//             });
//           }
//         });
//       }
      const avatarStyle={ backgroundColor: 'pink', width: 60, height: 60 }
      const iconStyle={ color:'white', width: 45, height: 45 }
      const textFields={ width: '80%', margin: 10}
      const buttonStyle={color: 'pink', width: '80%', height: '5vh'}
      const signUpStyle={paddingLeft: 6, fontSize: 15}
    

    return (
          <div>
                  <Grid>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountCircleOutlinedIcon style={iconStyle} />
            </Avatar>
            <h2>Sign Up</h2>
            <h4>Create an account.</h4>
          </Grid>
          <Grid align="center">
          <TextField
              label="Email"
              placeholder="Enter email"
              style={textFields}
              autoComplete="off"
              required
            />
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
            <TextField
              label="Password Confirmation"
              placeholder="Enter password confirmation"
              type="password"
              style={textFields}
              autoComplete="off"
              required
            />
            <Button type="submit" style={buttonStyle} variant="contained">
              Sign Up
            </Button>
            <Typography sx={{ paddingTop: 2}}>
              Already have an account?
            <Link
                style={signUpStyle}
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Log In!
            </Link>
          </Typography>
          </Grid>
      </Grid>



          </div>








//         <div>
//           <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//           onChange={handleChange}
//           > 
//           <label htmlFor="username">Username:</label>
//       <Field
//         id="username-signup-input"
//         type="text"
//         name="username"
//       />
//       <label htmlFor="email">Email:</label>
//       <Field
//         id="email-signup-input"
//         type="text"
//         name="email"
//       />
//       <label htmlFor="password">Password:</label>
//       <Field
//         id="password-signup-input"
//         type="password"
//         name="password"
//       />
//       <label htmlFor="password_confirmation">Password Confirmation:</label>
//       <Field
//         id="password_confirmation-signup-input"
//         type="password"
//         name="password_confirmation"
//       />
//       <button type="submit">Submit</button>

//           </Formik>
  
            
//         </div>
    )
}