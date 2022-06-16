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
    DialogContent,
    DialogContentText,
    DialogActions
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Registration() {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [emailAddressError, setEmailAddressError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [securityQuestionOne, setSecurityQuestionOne] = useState("");
    const [securityQuestionOneError, setSecurityQuestionOneError] = useState("");
    const [securityQuestionTwo, setSecurityQuestionTwo] = useState("");
    const [securityQuestionTwoError, setSecurityQuestionTwoError] = useState("");
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useHistory();

    function onHandleFirstName(event) {
        setRegisterError("");
        let fName = event.target.value;
        let fNameRegex = /^[a-zA-Z ]+$/;
        let err = "";
        if(!fName.trim()) {
            err = "First Name cannot be empty"
            setSuccess(false);
        } else if(!fNameRegex.test(fName)) {
            err = "First Name should only have alphabets"
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setFirstName(fName);
        setFirstNameError(err);
    }

    function onHandleLastName(event) {
        setRegisterError("");
        let lName = event.target.value;
        let lNameRegex = /^[a-zA-Z ]+$/;
        let err = "";
        if(!lName.trim()) {
            err = "Last Name cannot be empty";
            setSuccess(false);
        } else if(!lNameRegex.test(lName)) {
            err = "Last Name should only have alphabets";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setLastName(lName);
        setLastNameError(err);
    }

    function onHandleEmailAddress(event) {
        setRegisterError("");
        let emailAddressName = event.target.value;
        let emailAddressRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let err = "";
        if(!emailAddressName.trim()) {
            err = "Email Address cannot be empty";
            setSuccess(false);
        } else if(!emailAddressRegex.test(emailAddressName)) {
            err = "Email Address doesn't match criteria, ex: indu@outlook.com";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setEmailAddress(emailAddressName);
        setEmailAddressError(err);
    }

    function onHandlePassword(event) {
        setRegisterError("");
        let passwordValue = event.target.value;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let err = "";
        if(!passwordValue.trim()) {
            err = "Password cannot be empty";
            setSuccess(false);
        } else if(!passwordRegex.test(passwordValue)) {
            err = "Password doesn't match the criteria, \n" + 
                  "at least eight characters,\n" +
                  "at least one number,\n" +
                  "at least one lowercase letter,\n" +
                  "at least one uppercase letter, \n" +
                  "at least one special character ";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setPassword(passwordValue);
        setPasswordError(err);
    }

    function onHandleConfirmPassword(event) {
        setRegisterError("");
        let cPassword = event.target.value;
        let err = "";
        if(!cPassword.trim()) {
            err = "Confirm Password cannot be empty";
            setSuccess(false);
        } else if(password !== cPassword) {
            err = "Passwords doesn't match";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setConfirmPassword(cPassword);
        setConfirmPasswordError(err);
    }

    function onHandlePhoneNumber(event) {
        setRegisterError("");
        let phNumber = event.target.value;
        let phNumberRegex = /^[0-9]{10}$/;
        let err = "";
        if(!phNumber.trim()) {
            err = "Phone Number cannot be empty";
            setSuccess(false);
        } else if(!phNumberRegex.test(phNumber)) {
            err = "Phone Number should only have ten digits";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setPhoneNumber(phNumber);
        setPhoneNumberError(err);
    }

    function onHandleAddress(event) {
        setRegisterError("");
        let addressValue = event.target.value;
        let err = "";
        if(!addressValue.trim()) {
            err = "Address cannot be empty";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setAddress(addressValue);
        setAddressError(err);
    }

    function onHandleSecurityQuestionOne(event) {
        setRegisterError("");
        let sqOne = event.target.value;
        let sqOneRegex = /^[a-zA-Z ]+$/;
        let err = "";
        if(!sqOne.trim()) {
            err = "Security Question Answer cannot be empty";
            setSuccess(false);
        } else if(!sqOneRegex.test(sqOne)) {
            err = "Security Question Answer should only have alphabets";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setSecurityQuestionOne(sqOne);
        setSecurityQuestionOneError(err);
    }

    function onHandleSecurityQuestionTwo(event) {
        setRegisterError("");
        let sqTwo = event.target.value;
        let sqTwoRegex = /^[a-zA-Z ]+$/;
        let err = "";
        if(!sqTwo.trim()) {
            err = "Security Question Answer cannot be empty";
            setSuccess(false);
        } else if(!sqTwoRegex.test(sqTwo)) {
            err = "Security Question Answer should only have alphabets";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setSecurityQuestionTwo(sqTwo);
        setSecurityQuestionTwoError(err);
    }

    function onHandleSubmit() {
        if(success && ((firstName && lastName && emailAddress && password && confirmPassword && phoneNumber && address && 
            securityQuestionOne && securityQuestionTwo) !== "")) {
            setOpenDialog(true);
        } else {
            setRegisterError("All fields are mandatory");
        }
    }

    function onHandleClose() {
        setRegisterError("");
        setOpenDialog(false);
        setFirstName("");
        setFirstNameError("");
        setLastName("");
        setLastNameError("");
        setEmailAddress("");
        setEmailAddressError("");
        setPassword("");
        setPasswordError("");
        setConfirmPassword("");
        setConfirmPasswordError("");
        setPhoneNumber("");
        setPhoneNumberError("");
        setAddress("");
        setAddressError("");
        setSecurityQuestionOne("");
        setSecurityQuestionOneError("");
        setSecurityQuestionTwo("");
        setSecurityQuestionTwoError("");
        navigate.push("/login");
    }

    function onHandleReset() {
        setRegisterError("");
        setFirstName("");
        setFirstNameError("");
        setLastName("");
        setLastNameError("");
        setEmailAddress("");
        setEmailAddressError("");
        setPassword("");
        setPasswordError("");
        setConfirmPassword("");
        setConfirmPasswordError("");
        setPhoneNumber("");
        setPhoneNumberError("");
        setAddress("");
        setAddressError("");
        setSecurityQuestionOne("");
        setSecurityQuestionOneError("");
        setSecurityQuestionTwo("");
        setSecurityQuestionTwoError("");
    }

    return (
        <div>
            <Container maxWidth= "sm">
            <Grid item style= {{padding:"10%"}}>
                <Paper elevation={18}>
                    <form style= {{margin : "5%"}} >
                    <br/>
                        <Typography variant="h5" style={{padding:"2%"}}>
                            <b>Looks like you're new here!</b>
                        </Typography>
                        <FormHelperText style={{color:"red"}}>
                        {registerError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="firstname"
                        label="First Name"
                        type="text"
                        value={firstName}
                        onChange={onHandleFirstName}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {firstNameError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="lastname"
                        label="Last Name"
                        type="text"
                        value={lastName}
                        onChange={onHandleLastName}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {lastNameError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="emailaddress"
                        label="Email Address"
                        type="email"
                        value={emailAddress}
                        onChange={onHandleEmailAddress}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {emailAddressError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={onHandlePassword}
                        required/>
                        <FormHelperText style={{color:"red", whiteSpace:"pre-line"}}>
                        {passwordError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={onHandleConfirmPassword}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {confirmPasswordError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="phonenumber"
                        label="Phone Number"
                        type="text"
                        value={phoneNumber}
                        onChange={onHandlePhoneNumber}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {phoneNumberError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        multiline
                        rows={3}
                        maxRows={6}
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="address"
                        label="Address"
                        type="text"
                        value={address}
                        onChange={onHandleAddress}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {addressError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="securityquestionone"
                        label="Security Question - Favourite City"
                        type="text"
                        value={securityQuestionOne}
                        onChange={onHandleSecurityQuestionOne}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {securityQuestionOneError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#eeeeee"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="securityquestiontwo"
                        label="Security Question - Favourite Animal"
                        type="text"
                        value={securityQuestionTwo}
                        onChange={onHandleSecurityQuestionTwo}
                        required/>
                        <FormHelperText style={{color:"red"}}>
                        {securityQuestionTwoError}
                        </FormHelperText>
                        <Button variant="contained" color = "success"
                        onClick={onHandleSubmit} style = {{ marginBottom:"5%", border:"5px", backgroundColor: "#FFBB38", width:"45%"}}>
                           <b>Register</b> 
                        </Button>
                        <Dialog
                        open={openDialog}
                        onClose={onHandleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
                        <DialogTitle id="alert-dialog-title">
                            Successfully Registered !!!
                        </DialogTitle>
                        <DialogContent style={{padding:"5%"}}>
                            <DialogContentText id="alert-dialog-description">
                                Click ok to Login
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" size="small" onClick={onHandleClose} style={{backgroundColor: "blue", color:"white"}}>
                                <b>ok</b>
                            </Button>
                        </DialogActions>
                        </Dialog>
                        <Button variant="contained" style = {{backgroundColor: "#D3D3D3", marginLeft: "5%", marginBottom:"5%", width:"50%"}}
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

export default Registration;
