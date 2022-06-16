import {
    Typography,
    Grid,
    FormHelperText,
    TextField,
    Button,
    Paper,
    Container,
    Dialog,
    DialogTitle,
    DialogActions
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function SellerRegistration() {

    const [companyName, setCompanyName] = useState("");
    const [companyNameError, setCompanyNameError] = useState("");
    const [companyRegistrationNumber, setCompanyRegistrationNumber] = useState("");
    const [companyRegistrationNumberError, setCompanyRegistrationNumberError] = useState("");
    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState("");
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useHistory();

    function onHandleCompanyName(event) {
        setRegisterError("");
        let name = event.target.value;
        let err = "";
        if(!name.trim()) {
            err = "Company Name cannot be empty"
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setCompanyName(name);
        setCompanyNameError(err);
    }

    function onHandleNumber(event) {
        setRegisterError("");
        let number = event.target.value;
        let err = "";
        if(!number.trim()) {
            err = "Company's Registration Number cannot be empty";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setCompanyRegistrationNumber(number);
        setCompanyRegistrationNumberError(err);
    }

    function onHandleLocation(event) {
        setRegisterError("");
        let location = event.target.value;
        let err = "";
        if(!location.trim()) {
            err = "Company operating city cannot be empty";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setLocation(location);
        setLocationError(err);
    }

    function onHandleSubmit() {
        if(success && ((companyName && companyRegistrationNumber && location) !== "")) {
            setOpenDialog(true);
        } else {
            setRegisterError("All fields are mandatory");
        }
    }

    function onHandleClose() {
        setRegisterError("");
        setOpenDialog(false);
        setCompanyName("");
        setCompanyNameError("");
        setCompanyRegistrationNumber("");
        setCompanyRegistrationNumberError("");
        setLocation("");
        setLocationError("");
        navigate.push("/"); 
    }

    function onHandleReset() {
        setRegisterError("");
        setCompanyName("");
        setCompanyNameError("");
        setCompanyRegistrationNumber("");
        setCompanyRegistrationNumberError("");
        setLocation("");
        setLocationError("");
    }

    return (
        <div>
            <Container maxWidth= "sm">
            <Grid item style= {{padding:"10%"}}>
                <Paper elevation={18}>
                    <form style= {{margin : "5%"}} >
                        <Typography variant="h5" style={{padding:"2%"}}>
                            <b>Seller Registration Page</b>
                        </Typography>
                        <FormHelperText style={{color:"red"}}>
                        {registerError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="companyname"
                        label="Company Name"
                        type="text"
                        value={companyName}
                        onChange={onHandleCompanyName}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {companyNameError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="registrationnumber"
                        label="Company Registration Number"
                        type="text"
                        value={companyRegistrationNumber}
                        onChange={onHandleNumber}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {companyRegistrationNumberError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="location"
                        label="Company Operating City"
                        type="text"
                        value={location}
                        onChange={onHandleLocation}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {locationError}
                        </FormHelperText>
                        <Button variant="contained" color = "success"
                        onClick={onHandleSubmit} style = {{ marginBottom:"5%", border:"5px", backgroundColor: "#FFBB38", width:"45%"}}>
                           <b>Register</b> 
                        </Button>
                        <Dialog
                        open={openDialog}
                        onClose={onHandleClose}
                        aria-labelledby="alert-dialog-title"
                        >
                        <DialogTitle id="alert-dialog-title">
                            Successfully Registered as Seller !!!
                        </DialogTitle>
                        <DialogActions>
                            <Button variant="contained" size="small" onClick={onHandleClose} style={{backgroundColor: "blue", color:"white"}}>
                                <b>ok</b>
                            </Button>
                        </DialogActions>
                        </Dialog>
                        <Button variant="contained" style = {{backgroundColor: "#D3D3D3", marginLeft: "5%", marginBottom:"5%",width:"50%"}}
                        onClick={onHandleReset}>
                           <b>Reset</b> 
                        </Button>
                    </form>
                </Paper>
            </Grid>
            </Container>
        </div>
    )
}

export default SellerRegistration;