import {
    Typography,
    Grid,
    Card,
    Button,
    CardContent,
    FormHelperText,
    TextField,
    Snackbar,
    makeStyles
} from "@material-ui/core";
import { useState } from "react";
import Sidebar from "./sidebar";


const useStyles = makeStyles((theme) => ({
    component: {
        marginTop: 55,
        padding: "30px 6%",
        display: "flex",
    },
    header: {
        padding: "20px 40px",
        fontSize: 18,
        fontWeight: 500,
        borderBottom: "1px solid #e0e0e0",
    },
    leftComponent: {
        paddingRight: 15,
        [theme.breakpoints.between(0, 960)]: {
            paddingRight: 0,
            marginBottom: 20,
        },
    },
}));
function ProfileInformation() {

    const classes = useStyles();
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");
    const [success, setSuccess] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const vertical = "bottom";
    const horizontal = "center"

    function onHandlePassword(event) {
        let passwordValue = event.target.value;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let err = "";
        if (!passwordValue.trim()) {
            err = "Password cannot be empty";
            setSuccess(false);
        } else if (!passwordRegex.test(passwordValue)) {
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
        setNewPassword(passwordValue);
        setNewPasswordError(err);
    }

    function onHandleConfirmPassword(event) {
        let cPassword = event.target.value;
        let err = "";
        if (!cPassword.trim()) {
            err = "Confirm Password cannot be empty";
            setSuccess(false);
        } else if (newPassword !== cPassword) {
            err = "Passwords doesn't match";
            setSuccess(false);
        } else {
            setSuccess(true);
        }
        setConfirmNewPassword(cPassword);
        setConfirmNewPasswordError(err);
    }

    function onHandleSubmit() {
        if (success && ((newPassword && confirmNewPassword) !== "")) {
            setOpenSnackBar(true);
        }
        setNewPassword("");
        setNewPasswordError("");
        setConfirmNewPassword("");
        setConfirmNewPasswordError("");
    }

    function onHandleReset() {
        setOpenSnackBar("");
        setNewPassword("");
        setNewPasswordError("");
        setConfirmNewPassword("");
        setConfirmNewPasswordError("");
    }

    return (
        <div>
            <Grid container className={classes.component}>
                <Grid
                    item
                    lg={3}
                    md={3}
                    sm={12}
                    xs={12}
                    className={classes.leftComponent}>
                    <Sidebar />
                </Grid>
                <Grid style={{ background: "#fff" }} item lg={9} md={9} sm={12} xs={12}>
                    <Card elevation={0}>
                        <Typography className={classes.header}>
                            My Profile
                        </Typography>
                        <CardContent style={{ paddingLeft: 50 }}>
                            <Typography
                                variant="body2"
                                style={{ padding: "1%" }}
                                align="left">
                                {`Name : Linda George`}
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{ padding: "1%" }}
                                align="left">
                                {`Email : linda.geroge@gmail.com`}
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{ padding: "1%" }}
                                align="left">
                                {`Phone Number : +1 (904) 748 8787`}
                            </Typography>

                            <TextField style={{ backgroundColor: "#fff", width: "40%" }}
                                variant="filled"
                                size="small"
                                margin="normal"
                                name="password"
                                label="Password"
                                type="password"
                                value={newPassword}
                                onChange={onHandlePassword}
                                required />
                            <FormHelperText style={{ color: "red", whiteSpace: "pre-line" }}>
                                {newPasswordError}
                            </FormHelperText>
                            <TextField style={{ backgroundColor: "#fff", width: "40%" }}
                                variant="filled"
                                size="small"
                                margin="normal"
                                name="confirmpassword"
                                label="Confirm Password"
                                type="password"
                                value={confirmNewPassword}
                                onChange={onHandleConfirmPassword}
                                required />
                            <FormHelperText style={{ color: "red" }}>
                                {confirmNewPasswordError}
                            </FormHelperText>
                            <br />
                            <Button variant="contained" color="success"
                                onClick={() => onHandleSubmit()} style={{ border: "5px", marginBottom: "4%", backgroundColor: "#FFBB38" }}>
                                <b>Change Password</b>
                            </Button>
                            <Snackbar style={{ backgroundColor: "green", color: "white" }}
                                open={openSnackBar}
                                message={`password changed successfully`}
                                action={<Button variant="contained" size="small" onClick={onHandleReset}>
                                    close
                                </Button>}
                                anchorOrigin={{ vertical, horizontal }}
                                key={vertical + horizontal}
                            />
                            <Button variant="contained" style={{ backgroundColor: "#D3D3D3", marginLeft: "5%", marginBottom: "4%", width: "15%" }}
                                onClick={onHandleReset}>
                                <b>Reset</b>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProfileInformation;
