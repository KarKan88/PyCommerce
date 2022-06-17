import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { Divider, Paper, Container, makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

const products = [
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
];

export default function OrderSummary() {
    const useStyles = makeStyles((theme) => ({
        header: {
            padding: "20px 40px",
            fontSize: 18,
            fontWeight: 500,
            borderBottom: "1px solid #e0e0e0",
        }
    }));
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Container component="main" maxWidth="sm" style={{ marginBottom: 40 }}>
                <Paper variant="outlined" style={{ marginTop: 30, marginBottom: 30 }}>

                <Typography className={classes.header}>
                        Order Summary
                    </Typography>
                    <List disablePadding
                        sx={{
                            bgcolor: 'background.paper',
                            overflow: 'auto',
                            maxHeight: 420,
                        }}>
                        {products.map((product) => (
                            <ListItem key={product.name} alignItems={'flex-start'} sx={{ py: 1, px: 0 }}>
                                <img style={{ padding: 10 }} width={100} height={100} src="/images/default.jpg" alt="product" />
                                <ListItemText primary={product.name} secondary={product.desc} />
                                <Typography variant="body2">{product.price}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List dense>
                        <ListItem>
                            <ListItemText primary="Sub Total" />
                            <Typography variant="body2">
                                $34.06
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Tax" />
                            <Typography variant="body2">
                                $34.06
                            </Typography>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemText primary="Sub Total" />
                            <Typography variant="body2" fontWeight={600}>
                                $34.06
                            </Typography>
                        </ListItem>
                    </List>
                </Paper>
            </Container>
        </React.Fragment>
    );
}
