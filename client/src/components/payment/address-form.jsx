import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider, Box, Button, Collapse, IconButton, TextField, Select, FormControl, InputLabel, MenuItem, Paper, Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
// import { FormContainer, SelectElement, TextFieldElement } from 'react-hook-form-mui';
import { Close } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function AddressForm() {
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState("Error Message");
    const history = useHistory();

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

    const onCheckout = (event, formData) => {
        // event.stopPropagation()
        // console.log(formData)
        // let errMsg = "";
        // if (!validateEmail(formData.email)) {
        //     errMsg += "Invalid Email! \n";
        // }
        // if (!validateZipCode(formData.zip)) {
        //     errMsg += "Invalid Zip code! \n";
        // }
        // if (errMsg) {
        //     setMsg(errMsg)
        //     setOpen(true)
        // }
        // console.log(errMsg)
        history.push('/payment')
    }

    const goBack = () => {
        history.push('/')
    }

    return (
        <React.Fragment>
            <Container component="main" maxWidth="sm" style={{ marginBottom: 40 }} >
                <Paper variant="outlined" style={{ padding: 25, marginTop: 30, marginBottom: 30 }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>

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
                                <FormControl required fullWidth>
                                    <InputLabel id="demo-simple-select-required-label">State/Province/Region</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        required
                                    >
                                        <MenuItem value={'Ontario'}>Ontario</MenuItem>
                                        <MenuItem value={'Quebec'}>Quebec</MenuItem>
                                        <MenuItem value={'Nova Scotia'}>Nova Scotia</MenuItem>
                                        <MenuItem value={'New Brunswick'}>New Brunswick</MenuItem>
                                        <MenuItem value={'Manitoba'}>Manitoba</MenuItem>
                                        <MenuItem value={'British Columbia'}>British Columbia</MenuItem>
                                        <MenuItem value={'Prince Edward Island'}>Prince Edward Island</MenuItem>
                                        <MenuItem value={'Saskatchewan'}>Saskatchewan</MenuItem>
                                        <MenuItem value={'Alberta'}>Alberta</MenuItem>
                                        <MenuItem value={'Newfoundland and Labrador'}>Newfoundland and Labrador</MenuItem>
                                        <MenuItem value={'Northwest Territories'}>Northwest Territories</MenuItem>
                                        <MenuItem value={'Yukon'}>Yukon</MenuItem>
                                        <MenuItem value={'Nunavut'}>Nunavut</MenuItem>
                                    </Select>
                                </FormControl>
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
                                <Button variant="contained" style={{ backgroundColor: "#FFBB38", marginLeft: 10 }}
                                    type='button' onClick={onCheckout}>Proceed to Checkout</Button>
                                <Button variant="contained" style={{ backgroundColor: "#FF5C5C", marginLeft: 10 }}
                                    onClick={goBack}>Continue Shopping</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

