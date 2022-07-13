import {
    Typography,
    Grid,
    FormHelperText,
    TextField,
    Button,
    Paper,
    Container,
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {

    const [emailAddress, setEmailAddress] = useState("");
    const [emailAddressError, setEmailAddressError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useHistory();

    function onHandleEmailAddress(event) {
        setLoginError("");
        let emailAddressName = event.target.value;
        let emailAddressRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let err = "";
        if(!emailAddressName.trim()) {
            err = "Email Address cannot be empty";
            setSuccess(false);
        } else if(!emailAddressRegex.test(emailAddressName)) {
            err = "Email Address format is not correct, ex: indu@outlook.com";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setEmailAddress(emailAddressName);
        setEmailAddressError(err);
    }

    function onHandlePassword(event) {
        setLoginError("");
        let passwordValue = event.target.value;
        let err = "";
        if(!passwordValue.trim()) {
            err = "Password cannot be empty";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setPassword(passwordValue);
        setPasswordError(err);
    }

    function onHandleSubmit() {
        if(!(success && ((emailAddress && password) !== ""))) {
            setLoginError("Email address and password fields are mandatory");
        } else {
            localStorage.setItem("login","loginSuccess");
            navigate.push('/');
        }
    }

    function onHandleReset() {
        setLoginError("");
        setEmailAddress("");
        setEmailAddressError("");
        setPassword("");
        setPasswordError("");
    }

    return (
        <div>
            <Container maxWidth= "md">
            <br/>
            <Grid item style= {{paddingLeft:"20%", paddingRight:"20%", paddingTop:"5%"}} >
                <Paper elevation={18} style = {{justifyContent:"center", alignItems:"center"}}>
                    <form style= {{margin : "5%"}} >
                    <br/>
                        <Typography variant="h5" style={{padding:"2%"}}>
                            <b>Let's get started</b>
                        </Typography>
                        <FormHelperText style = {{color:"red"}}>
                        {loginError}
                        </FormHelperText>
                        <TextField style ={{backgroundColor: "#fff"}}
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
                        <TextField style ={{backgroundColor: "#fff"}}
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
                        <FormHelperText style={{color:"red"}}>
                        {passwordError}
                        </FormHelperText>
                        <Typography>
                            <a href="/forgotpassword" style={{color:"#288CBE"}}>forgot password?</a>
                        </Typography>
                        <br/>
                        <Button variant="contained" color = "success"
                        onClick={onHandleSubmit} style = {{ marginBottom:"5%", border:"5px",backgroundColor: "#FFBB38", width:"45%"}}>
                           <b>Login</b> 
                        </Button>
                        <Button variant="contained" style = {{backgroundColor: "#D3D3D3", marginLeft: "5%", marginBottom:"5%", width:"50%"}}
                        onClick={onHandleReset}>
                           <b>Reset</b> 
                        </Button>
                        <Typography style={{paddingLeft: "30%"}}>
                        New Customer? <a href="/registration" style={{color:"#288CBE"}}>signup here</a>
                    </Typography>
                    <br/>
                    </form>
                </Paper>
            </Grid>
            </Container>
        </div>
    )
}

export default Login;
