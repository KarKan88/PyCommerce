
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";
// import { updateQuantity } from "../../actions/cart-action";
import toastMessage from "../../utils/toast-message";
const useStyle = makeStyles({
  component: {
    marginTop: 30
  },
  button: {
    borderRadius: "50%"
  }
});

const CounterButton = ({
  product
}) => {
  const classes = useStyle();
  const [counter, setCounter] = useState(product.qty);

  const handleIncrement = () => {
      setCounter(counter => counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter => counter - 1);
  };

  return <>
      <ButtonGroup className={classes.component}>
        <Button className={classes.button} onClick={() => handleDecrement()} disabled={counter == 1}>
          -
        </Button>
        <Button disabled style={{color: "#000"}}>{counter}</Button>
        <Button className={classes.button} onClick={() => handleIncrement()}>
          +
        </Button>
      </ButtonGroup>
    </>;
};

export default CounterButton;