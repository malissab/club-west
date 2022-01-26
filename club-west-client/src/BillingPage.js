import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';



export default function BillingPage() {

    const initialValues={
        email: '',
        firstName:'',
        lastName: '',
        company: '',
        address: '',
        addressTwo: '',
        city: '',
        country: '',
        state: '',
        zipCode: '',
        cardNumber: '',
        cardName: '',
        expiration: '',
        securityCode: ''
    }

    const navigate = useNavigate();

    return (
        <>
             
          <Formik initialValues={initialValues} >
                {() => (
                    <Form style= {{ paddingTop: 200 }}>
          <Field as={TextField}
              label="Email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Field as={TextField}
              label="First Name"
              name="firstName"
              placeholder="First Name"
              required
            />
            <Field as={TextField}
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <Field as={TextField}
              label="Company(optional)"
              name="company"
              placeholder="Company(optional)"
            />
            <Field as={TextField}
              label="Address"
              name="address"
              placeholder="Address"
              required
            />
            <Field as={TextField}
              label="Apartment, Suite..."
              name="addressTwo"
              placeholder="Enter Apartment, Suite, Number (optional)"
            />
            <Field as={TextField}
              label="City"
              name="city"
              placeholder="City"
              required
            />
            <Field as={TextField}
              label="Country"
              name="country"
              placeholder="Country"
              required
            />
            <Field as={TextField}
              label="State"
              name="state"
              placeholder="State"
              required
            />
            <Field as={TextField}
              label="Postal Code"
              name="zipCode"
              placeholder="Postal Code"
              required
            />
            <Field as={TextField}
              label="Card Number"
              name="cardNumber"
              placeholder="Enter 16 digit card number"
              required
            />
            <Field as={TextField}
              label="Name On Card"
              name="cardName"
              placeholder="Enter name on card"
              required
            />
            <Field as={TextField}
              label="Expiration Date"
              name="expirationDate"
              placeholder="Enter expiration date, ex. '01/10'"
              required
            />
            <Field as={TextField}
              label="Security Code"
              name="securityCode"
              placeholder="Enter 3 digit security code"
              required
            />
            <Button type="submit" variant="contained">
              Place Order
            </Button>
            </Form>
                )}
            </Formik>
        
          
          </>
    )
}

