import ShopPage from "./Shop/ShopPage.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar' 
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ConnectPage from './ConnectPage'
import LoginSignupPage from './Login Signup/LoginSignupPage.js'
import CartPage from './Shop/CartPage'
import BillingPage from './BillingPage'
import ErrorPage from "./ErrorPage.js";
import ItemDetails from "./Shop/ItemDetails.js";







function App() {
  const [loginAnchorEl, setLoginAnchorEl] = useState(false);
  const [signupAnchorEl, setSignupAnchorEl] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState(null);
  const [getItem, setGetItem] = useState({});



  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsUser(true);
        });
      }
    });
  }, []);

  function renderItemDetails(id){
    fetch(`items/${id}`)
        .then(res => res.json())
        .then(itemData => {
            setGetItem(itemData)
        })
  }

  function handleLoginClick(event){
        setLoginAnchorEl(event.currentTarget)
        console.log(user)  
    }
    
    function handleSignupClick(event){
        setSignupAnchorEl(event.currentTarget)
        console.log(isUser)
       
    }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<LoginSignupPage setIsUser={setIsUser} handleSignupClick={handleSignupClick} signupAnchorEl={signupAnchorEl} setSignupAnchorEl={setSignupAnchorEl}  />} />
        <Route path="/login" element={<LoginSignupPage setIsUser={setIsUser} handleLoginClick={handleLoginClick} loginAnchorEl={loginAnchorEl} setLoginAnchorEl={setLoginAnchorEl}/>} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/items/:id" element={<ItemDetails item={getItem} />} />
          <Route path="/items" element={<ShopPage renderDetails={renderItemDetails} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={ <HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          </Routes>
      </Router>
      </div>
  
  );
}

export default App;




