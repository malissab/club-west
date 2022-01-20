import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Typography, Box } from "@mui/material";



export default function LoginSignupPage({ setIsUser, handleSignupClick, handleLoginClick, loginAnchorEl, setLoginAnchorEl, signupAnchorEl, setSignupAnchorEl }) {
    const [value,setValue]=useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

    const handleLoginClose = () => {
        setLoginAnchorEl(null);
    }

    const handleSignUpClose = () => {
        setSignupAnchorEl(null);
    }
    const paperStyle={paddingTop: 20, height: '60vh', width: 500, margin: '200px auto'}

    return (
        <div>
    <Paper elevation={20} style={paperStyle} >
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Log In" />
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <LoginForm setIsUser={setIsUser} loginAnchorEl={loginAnchorEl} handleLoginClose={handleLoginClose}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SignupForm setIsUser={setIsUser} signupAnchorEl={signupAnchorEl} handleSignUpClose={handleSignUpClose}/>
      </TabPanel>
      </Paper>

        </div>
    )
}