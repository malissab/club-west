import ShopPage from "./Shop/ShopPage.js";
import ItemCard from "./Shop/ItemCard.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './NavBar' 
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ConnectPage from './ConnectPage'
import LoginSignupPage from './Login Signup/LoginSignupPage.js'
import CartPage from './Shop/CartPage'
import { useFormik } from 'formik';
import * as yup from 'yup';
import ErrorPage from "./ErrorPage.js";





function App() {
  // const [loginAnchorEl, setLoginAnchorEl] = useState(null);
  // const [signupAnchorEl, setSignupAnchorEl] = useState(null);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // function handleLoginClick(event){
  //       setLoginAnchorEl(event.currentTarget)
  //       console.log('Login')
  //   }
    
  //   function handleSignupClick(event){
  //       setSignupAnchorEl(event.currentTarget)
  //       console.log('Signup')
  //   }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<LoginSignupPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/items/:id" element={<ItemCard />} />
          <Route path="/items" element={<ShopPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={ <HomePage /> } />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




