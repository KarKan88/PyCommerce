import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Form } from "@material-ui/core";
import Sidebar from "../components/profile/seller-sidebar";
import validateInput from "../validations/validationAddCoupon";
import { useHistory, useParams } from "react-router-dom";

import {
  TextField,
  FormControl,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    padding: "30px 6%",
    display: "flex",
  },
  leftComponent: {
    paddingRight: 15,
    [theme.breakpoints.between(0, 960)]: {
      paddingRight: 0,
      marginBottom: 20,
    },
  },
}));

function AddProduct() {
  const navigate = useHistory();
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState("");

  const { id } = useParams("");

  useEffect(() => {

    if (id) {
      let localData = JSON.parse(localStorage.getItem("couponData"));
      if (JSON.stringify(data) != JSON.stringify(localData)) {
        setData(localData);
      }

      let value = localData.find((x) => +x.id == +id);

      if (!category) {
        setCategory(value?.category ?? "");
        setName(value?.name ?? "");
        setDiscount(value?.discount ?? "");
        setQuantity(value?.quantity ?? "");
        setSerialNo(value?.serialNo ?? "");
        setPrice(value?.price ?? "");
      }
    } else {
    }
  });

  const onChange = (ev) => {
    if (ev.target.name == "category") {
      console.log(ev.target);
      setCategory(ev.target.value);
    } else if (ev.target.name == "name") {
      setName(ev.target.value);
    } else if (ev.target.name == "serialNo") {
      setSerialNo(ev.target.value);
    } else if (ev.target.name == "price") {
      setPrice(ev.target.value);
    } else if (ev.target.name == "discount") {
      setDiscount(ev.target.value);
    } else if (ev.target.name == "quantity") {
      setQuantity(ev.target.value);
    }
  };

  const isValid = () => {
    const { errors, isValid } = validateInput({
      name,
      serialNo,
      price,
      discount,
      quantity,
    });
    if (!isValid) {
      setErrors(errors);
    }
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      serialNo,
      price,
      discount,
      quantity,
      id: id ? id : Math.round(Math.random() * 100000),
    };

    if (isValid(data)) {
      if (id) {
        let localData = JSON.parse(localStorage.getItem("couponData"));
        let value = localData.findIndex((x) => +x.id == +id);
        localData[value] = data;
        setTimeout(() => {
          localStorage.setItem("couponData", JSON.stringify(localData));
          navigate.push("/view-coupon");
        }, 1000);
      } else {
        if (localStorage.getItem("couponData")) {
          let values = JSON.parse(localStorage.getItem("couponData"));
          values.push(data);
          localStorage.setItem("couponData", JSON.stringify(values));
        } else {
          localStorage.setItem("couponData", JSON.stringify([data]));
        }
        navigate.push("/view-coupon");
      }
    } else {
      console.log("Errors");
    }
  };

  return (
    <Grid container className={classes.component}>
      <Grid
        item
        lg={3}
        md={3}
        sm={12}
        xs={12}
        className={classes.leftComponent}
      >
        <Sidebar />
      </Grid>
      <Grid style={{ background: "#fff" }} item lg={9} md={9} sm={12} xs={12}>
        <form onSubmit={handleSubmit} style={{ padding: 40 }}>
          <div className="box">
            <div className="border-bottom py-3 text-center">
              <h2>{id ? "Update " : "ADD "} COUPON</h2>
              <br/>
            </div>
            <div className="p-5">
       

              <FormControl >
                <TextField style={{ backgroundColor: "#eeeeee", width: 500 }}
                  error={errors.name ? true : false}
                  fullWidth
                  variant="filled"
                  size="small"
                  margin="normal"
                  helperText={errors.name}
                  id="standard-basic"
                  label="Coupon Code"
                  value={name}

                  onChange={(e) => onChange(e)}
                  name="name"

                />

              </FormControl>

              <FormControl fullWidth className="w-50">
                <TextField style={{ backgroundColor: "#eeeeee", width: 500 }}
                  id="standard-basic"
                  fullWidth
                  variant="filled"
                  size="small"
                  margin="normal"
                  error={errors.serialNo ? true : false}
                  helperText={errors.serialNo}
                  label="Coupon Condition"
                  value={serialNo}

                  name="serialNo"
                  onChange={(e) => onChange(e)}

                />
              </FormControl>


              <FormControl fullWidth>
                <TextField style={{ backgroundColor: "#eeeeee", width: 500 }}
                  id="standard-basic"
                  fullWidth
                  variant="filled"
                  size="small"
                  margin="normal"
                  label="Discount %"
                  value={discount}
                  name="discount"
                  error={errors.discount ? true : false}
                  helperText={errors.discount}
                  onChange={(e) => onChange(e)}

                />
              </FormControl>

              <FormControl fullWidth>
                <TextField style={{ backgroundColor: "#eeeeee", width: 500 }}
                  id="standard-basic"
                  fullWidth
                  variant="filled"
                  size="small"
                  margin="normal"
                  label="Maximum Off"
                  value={quantity}

                  error={errors.quantity ? true : false}
                  helperText={errors.quantity}
                  onChange={(e) => onChange(e)}
                  name="quantity"

                />
              </FormControl>

              <div className="mt-5 w-100">
                <Button style={{ backgroundColor: "#EB853B", marginTop: 20, color: "#222", fontWeight: 600, marginRight: 10 }}
                  variant="contained"
                  type="submit"
                  color="primary"
                  className="w-100"
                >
                  SAVE COUPON
                </Button>
              </div>

            </div>
          </div>
        </form>
      </Grid>
    </Grid>
  );
}

export default AddProduct;
