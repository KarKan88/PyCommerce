import { Box, Button, Container, CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(6),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

function OrderConfirmed() {
    const classes = useStyles();
    const history = useHistory();
    
    const goBack = () => {
        history.push('/')
    }
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="lg">
                <Paper elevation={3} style={{ padding: 30 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h2" component="h1" gutterBottom>
                                Order placed successfully
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                {'Thank you for purchasing with us.'}
                                {'You will be receiving a confirmation mail with the order details.'}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Box>
                                <Button variant="contained" style={{ backgroundColor: "#FF5C5C", marginLeft: 10 }}
                                    onClick={goBack}>Continue Shopping</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default OrderConfirmed