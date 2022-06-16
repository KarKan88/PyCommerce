import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider, Box, Button, Collapse, IconButton, TextField, Select } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
// import { FormContainer, SelectElement, TextFieldElement } from 'react-hook-form-mui';
import { Close } from '@material-ui/icons';
import { useForm } from 'react-hook-form';

export default function AddressForm() {
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState("Error Message");

    const formContext = useForm();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }
    const validateZipCode = (zipcode) => {
        return String(zipcode)
            .toLowerCase()
            .match(
                /[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
            )
    }

    return (
        <React.Fragment>
            <Collapse in={open}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {msg}
                </Alert>
            </Collapse>
            <form onSubmit={function onSubmit(formData) {
                console.log(formData)
                let errMsg = "";
                if (!validateEmail(formData.email)) {
                    errMsg += "Invalid Email! \n";
                }
                if (!validateZipCode(formData.zip)){
                    errMsg += "Invalid Zip code! \n";
                }
                if (errMsg) {
                    setMsg(errMsg)
                    setOpen(true)
                }
                console.log(errMsg)
            }}>
                <Typography variant="h6" gutterBottom>
                    Contact details
                </Typography>
                <Box m={1} mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="email"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="phone"
                                name="phone"
                                label="Phone Number (xxx)xxx-xxx"
                                type="number"
                                fullWidth
                                autoComplete="email"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Divider />
                <Box m={1}>
                    <Typography variant="h6" gutterBottom>
                        Shipping address
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                autoComplete="shipping address-line2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Select
                                fullWidth
                                label="State/Province/Region"
                                name="State/Province/Region"
                                options={[
                                    { id: 'Ontario', title: 'Ontario' },
                                    { id: 'Quebec', title: 'Quebec' },
                                    { id: 'Nova Scotia', title: 'Nova Scotia' },
                                    { id: 'New Brunswick', title: 'New Brunswick' },
                                    { id: 'Manitoba', title: 'Manitoba' },
                                    { id: 'British Columbia', title: 'British Columbia' },
                                    { id: 'Prince Edward Island', title: 'Prince Edward Island' },
                                    { id: 'Saskatchewan', title: 'Saskatchewan' },
                                    { id: 'Alberta', title: 'Alberta' },
                                    { id: 'Newfoundland and Labrador', title: 'Newfoundland and Labrador' },
                                    { id: 'Northwest Territories', title: 'Northwest Territories' },
                                    { id: 'Yukon', title: 'Yukon' },
                                    { id: 'Nunavut', title: 'Nunavut' },
                                ]}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="flex-end">
                            <Button variant="outlined" type='submit'>Proceed to Checkout</Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </React.Fragment>
    );
}

