import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    header: {
        padding: "20px 40px",
        fontSize: 18,
        fontWeight: 500,
        borderBottom: "1px solid #e0e0e0",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '80%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

function OrderHistory() {

    const history = useHistory()
    const [orderDetails, setODs] = useState([])

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onTrack = (order) => {
        history.push({pathname: '/deliveryStatus', state: order})
    }

    useEffect(() => {
        const user_id = localStorage.getItem('id')
        axios.get('/order/get-order?id=' + user_id).then((response)=>{
            setODs(response.data)
        })

    }, [])

    return (
        <div className={classes.root}>
            <Typography className={classes.header}>
                My Orders
            </Typography>

            {orderDetails.map((order) => {
                return (
                    <Accordion expanded={expanded === order._id} onChange={handleChange(order._id)}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>
                                <b>Order Placed</b>: {order.paymentDetails?.transactionTime} <b>Order Total</b>: $  {order.totalPrice}
                            </Typography>
                            <Typography className={classes.secondaryHeading}>Order ID: {order._id}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List disablePadding style={{ width: '100%' }}
                                sx={{
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                                    maxHeight: 420,
                                }}>
                                {order.products.map((product) => (
                                    <ListItem key={product.product._id} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                        <img style={{ padding: 10 }} width={70} height={70} src={product.product.url ?? "/images/default.jpg"} alt="product" />
                                        <ListItemText primary={product.product[0].title.shortTitle} secondary={'Qty: '+product.qty} />
                                        <Box style={{ display: 'flex', justifyContent: "flex-end", alignItems: "flex-end" }}>
                                            <Box></Box>
                                            <Typography variant="body2">${product.product[0].price.cost}</Typography>
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                        <AccordionActions>
                            {/* <Button variant="contained" style={{ backgroundColor: "#FFBB38", marginLeft: 10 }} size="small"
                                type='button' >Update Shipping Address</Button> */}
                            <Button variant="contained" onClick={() => onTrack(order)} style={{ backgroundColor: "#FFBB38", fontWeight: 600 }} size="small">
                                Track Package
                            </Button>
                        </AccordionActions>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default OrderHistory