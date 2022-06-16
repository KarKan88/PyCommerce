import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: 20
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

    const [orderDetails, setODs] = useState([{
        orderId: "Order#001",
        orderDate: "2nd May, 2022",
        orderTotal: "CDN$ 140.58",
        orderItems: [
            {
                name: 'Product 1',
                desc: 'A nice thing',
                price: '$9.99',
            },
            {
                name: 'Product 2',
                desc: 'Another thing',
                price: '$3.45',
            },
            {
                name: 'Product 3',
                desc: 'Best thing of all',
                price: '$14.11',
            },
            {
                name: 'Product 4',
                desc: 'Best thing of all',
                price: '$14.11',
            },
        ]
    },
    {
        orderId: "Order#002",
        orderDate: "8nd May, 2022",
        orderTotal: "CDN$ 178.00",
        orderItems: [
            {
                name: 'Product 1',
                desc: 'A nice thing',
                price: '$9.99',
            },
            {
                name: 'Product 2',
                desc: 'Another thing',
                price: '$3.45',
            },
            {
                name: 'Product 3',
                desc: 'Best thing of all',
                price: '$14.11',
            },
            {
                name: 'Product 4',
                desc: 'Best thing of all',
                price: '$14.11',
            },
        ]
    }
    ])

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Typography variant='h4' gutterBottom>Order History</Typography>
            {orderDetails.map((order) => {
                return (
                    <Accordion expanded={expanded === order.orderId} onChange={handleChange(order.orderId)}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>
                                <b>Order Placed</b>: {order.orderDate} <b>Order Total</b>: {order.orderTotal}
                            </Typography>
                            <Typography className={classes.secondaryHeading}>Order ID: {order.orderId}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List disablePadding style={{ width: '100%' }}
                                sx={{
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                                    maxHeight: 420,
                                }}>
                                {order.orderItems.map((product) => (
                                    <ListItem key={product.name} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                        <img style={{ padding: 10 }} width={70} height={70} src="/images/default.jpg" alt="product" />
                                        <ListItemText primary={product.name} secondary={product.desc} />
                                        <Box style={{ display: 'flex', justifyContent: "flex-end", alignItems: "flex-end" }}>
                                            <Box></Box>
                                            <Typography variant="body2">{product.price}</Typography>
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                        <AccordionActions>
                            {/* <Button variant="contained" style={{ backgroundColor: "#FFBB38", marginLeft: 10 }} size="small"
                                type='button' >Update Shipping Address</Button> */}
                            <Button variant="contained" style={{ backgroundColor: "#FFBB38" }} size="small">
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