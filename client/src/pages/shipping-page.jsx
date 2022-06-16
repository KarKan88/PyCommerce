import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core'
import AddressForm from '../components/payment/address-form'
import OrderSummary from '../components/payment/order-summary'

function ShippingPage() {
    return (
        <>
            <Grid container>
                <Grid item lg={7} xs={12}>
                    <Container component="main" maxWidth="sm" style={{marginBottom: 40}} >
                        <Paper variant="outlined" style={{padding: 25, marginTop: 30, marginBottom: 30}}>
                            <Typography component="h1" variant="h4" align="center">
                                Checkout
                            </Typography>
                            <AddressForm />
                        </Paper>
                    </Container>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item lg={4} xs={12}>
                    <Container component="main" maxWidth="sm" style={{ marginBottom: 40 }}>
                        <Paper variant="outlined" style={{padding: 25, marginTop: 30, marginBottom: 30}}>
                            <OrderSummary />
                        </Paper>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}

export default ShippingPage