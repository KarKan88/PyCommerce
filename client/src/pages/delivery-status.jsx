import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        "& .MuiStepIcon-active": { color: "#4BBC57" },
        "& .MuiStepIcon-completed": { color: "#4BBC57" }
    },
    header: {
        padding: "20px 40px",
        fontSize: 18,
        fontWeight: 500,
        borderBottom: "1px solid #e0e0e0",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '25%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Order Placed', 'Order Confirmed', 'Order in transit', 'Order Delivered'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Order Placed';
        case 1:
            return 'Order Confirmed';
        case 2:
            return 'Order in transit';
        case 3:
            return 'Order Delivered';
        default:
            return 'Unknown stepIndex';
    }
}

export default function DeliveryStatus() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(2);
    const steps = getSteps();

    return ( <
        >
        <
        div className = { classes.root } >
        <
        Typography className = { classes.header } >
        Track Package <
        /Typography> <
        Box style = {
            { display: 'flex', justifyContent: "space-between", alignItems: "space-between", padding: 40 } } >

        <
        Typography className = { classes.heading } >
        <
        b > Order Placed < /b>: May 2nd, 2022 <b>Order Total</b >: CDN$140: 58 <
        /Typography> <
        Typography className = { classes.secondaryHeading } > Order ID: Order #001</Typography>

                </Box>

                <Stepper activeStep= { activeStep }
        alternativeLabel style = {
            { iconColor: "red" } } > {
            steps.map((label) => ( <
                Step key = { label } >
                <
                StepLabel > { label } < /StepLabel> <
                /Step>
            ))
        } <
        /Stepper> <
        /div> <
        />
    );
}