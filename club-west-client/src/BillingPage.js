import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik, Form, Field } from "formik";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


export default function BillingPage() {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    addressTwo: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiration: "",
    securityCode: "",
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const emailField={ width: '20%', margin: 10}
  const firstField={ width: '20%', margin: 10}
  const lastField={ width: '20%', margin: 10}
  const coField={ width: '12%', margin: 10}
  const addField={ width: '30%', margin: 10}
  const aptField={width: '10%', margin: 10}
  const cityField={width: '10%', margin: 10}
  const countryField={width: '10%', margin: 10}
  const stateField={width: '10%', margin: 10}
  const zipField={width: '10%', margin: 10}
  const cardField={width: '30%', margin: 10}
  const nameField={width: '20%', margin: 10}
  const expField={width: '10%', margin: 10}
  const secField={width: '10%', margin: 10}
 




  return (
    <>
    <h3 style={{ fontFamily: 'courierPrime', paddingTop: 100}}>[ checkout ]</h3>
      <Formik initialValues={initialValues}>
        {() => (
          <Form style={{ paddingTop: 40 }}>
            <Field
              as={TextField}
              label="Email"
              name="email"
              placeholder="Enter email"
              required
              style={emailField}
            />
            <br></br>
            <Field
              as={TextField}
              label="First Name"
              name="firstName"
              placeholder="First Name"
              required
              style={firstField}
            />
            <Field
              as={TextField}
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              required
              style={lastField}
            />
            
            <Field
              as={TextField}
              label="Company(optional)"
              name="company"
              placeholder="Company(optional)"
              style={coField}
            />
            <br></br>
            <Field
              as={TextField}
              label="Address"
              name="address"
              placeholder="Address"
              required
              style={addField}
            />
            <Field
              as={TextField}
              label="Apartment, Suite..."
              name="addressTwo"
              placeholder="Enter Apartment, Suite, Number (optional)"
              style={aptField}
            />
            <Field
              as={TextField}
              label="City"
              name="city"
              placeholder="City"
              required
              style={cityField}
            />
            <br></br>
            <Field
              as={TextField}
              label="Country"
              name="country"
              placeholder="Country"
              required
              style={countryField}
            />
            <Field
              as={TextField}
              label="State"
              name="state"
              placeholder="State"
              required
              style={stateField}
            />
            <Field
              as={TextField}
              label="Postal Code"
              name="zipCode"
              placeholder="Postal Code"
              required
              style={zipField}
            />
            <h4 style={{ fontFamily: 'courierPrime', margin: 10}}>[ billing ]</h4>
            <Field
              as={TextField}
              label="Card Number"
              name="cardNumber"
              placeholder="Enter 16 digit card number"
              required
              style={cardField}
            />
            <Field
              as={TextField}
              label="Name On Card"
              name="cardName"
              placeholder="Enter name on card"
              required
              style={nameField}
            />
            <br></br>
            <Field
              as={TextField}
              label="Expiration Date"
              name="expirationDate"
              placeholder="Enter expiration date, ex. '01/10'"
              required
              style={expField}
            />
            <Field
              as={TextField}
              label="Security Code"
              name="securityCode"
              placeholder="Enter 3 digit security code"
              required
              style={secField}
            />
            <Button type="submit" variant="contained" onClick={handleClickOpen} color= 'success' style={{ margin: 10}}>
              Place Order
            </Button>
          </Form>
        )}
      </Formik>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Order placed!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Order #27363649 has been placed, thanks for shopping with club west!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
