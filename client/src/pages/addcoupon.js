/**
 * Author: Hemanth Nadipineni
 * Banner ID: B00899473
 */
import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Form } from "@material-ui/core";
import Sidebar from "../components/profile/seller-sidebar";
import validateInput from "../validations/validationAddCoupon";
import { useHistory, useParams } from "react-router-dom";
import {
  InputLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@material-ui/core";
/**
 * The useStyles variable will make styles for spaces around the add coupon component rendered.
 */
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
/**
 * The AddCoupon function is to create a form and its functionalities.
 */
function AddCoupon() {
  const navigate = useHistory();
  const classes = useStyles();
  const [category, setCategory] = useState("");

  const [couponCode, setCouponCode] = useState("");
  const [couponCondition, setCouponCondition] = useState("");
  const [discount, setDiscount] = useState("");
  const [maximumOff, setMaximumOff] = useState("");

  const [data, setData] = useState([]);
  const [errors, setErrors] = useState("");

  const { id } = useParams("");
  /**
   *  The variables for coupon details declared above into localStorage as couponData using useEffect function.
   */
  useEffect(() => {
    if (id) {
      let localData = JSON.parse(localStorage.getItem("couponData"));
      if (JSON.stringify(data) != JSON.stringify(localData)) {
        setData(localData);
      }
      let value = localData.find((x) => +x.id == +id);
      if (!category) {
        setCategory(value?.category ?? "");
        setCouponCode(value?.couponCode ?? "");
        setCouponCondition(value?.couponCondition ?? "");
        setDiscount(value?.discount ?? "");
        setMaximumOff(value?.maximumOff ?? "");
        
      }
    } else {
    }
  });
  /**
   *  The variable of coupon details from the form inputs are set below.
   */
  const onChange = (ev) => {
    setCategory("Mobile");
    if (ev.target.name == "couponCode") {
      setCouponCode(ev.target.value);
    } else if (ev.target.name == "couponCondition") {
      setCouponCondition(ev.target.value);
    } else if (ev.target.name == "discount") {
      setDiscount(ev.target.value);
    } else if (ev.target.name == "maximumOff") {
      setMaximumOff(ev.target.value);
    }
  };
/**
 * The isValid Function will check for any errors in the inputs submitted through forms.
 */
  const isValid = () => {
    const { errors, isValid } = validateInput({
      category,
      couponCode,
      couponCondition,
      discount,
      maximumOff,
    });
    if (!isValid) {
      setErrors(errors);
    }
    return isValid;
  };
  /**
   * The events like validations, initilization of variables will be performed on submission of the form
   * using hadleSubmit function.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      category,
      couponCode,
      couponCondition,
      discount,
      maximumOff,
      id: id ? id : Math.round(Math.random() * 100000),
    };
    /**
     * The conditions to check if the inputs filled in the form are valid. If they are valid,
     *  then store it in localStorage. Else show the errors. 
     */
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

  /**
   * The page renders the form for the user to give inputs for the coupon data.
   */
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
              <h2>{id ? "Update " : "Add "} Coupon</h2>
              <br />
            </div>
            <div className="p-5">
              <FormControl>
                <TextField
                  style={{ backgroundColor: "#fff", width: 500 }}
                  error={errors.name ? true : false}
                  fullWidth
                  variant="filled"
                  size="small"
                  margin="normal"
                  helperText={errors.name}
                  id="standard-basic"
                  label="Coupon Code"
                  value={couponCode}
                  onChange={(e) => onChange(e)}
                  name="couponCode"
                />
              </FormControl>

              <FormControl fullWidth className="w-50">
                <TextField
                  style={{ backgroundColor: "#fff", width: 500 }}
                  id="standard-basic"
                  fullWidth
                  variant="filled"
                  size="small"
                  margin="normal"
                  error={errors.couponCondition ? true : false}
                  helperText={errors.couponCondition}
                  label="Coupon Condition"
                  value={couponCondition}
                  name="couponCondition"
                  onChange={(e) => onChange(e)}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  style={{ backgroundColor: "#fff", width: 500 }}
                  id="standard-basic"
                  fullWidth
                  variant="filled"
                  size="small"
                  margin="normal"
                  label="Discount"
                  value={discount}
                  name="discount"
                  error={errors.discount ? true : false}
                  helperText={errors.discount}
                  onChange={(e) => onChange(e)}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  style={{ backgroundColor: "#fff", width: 500 }}
                  id="standard-basic"
                  fullWidth
                  variant="filled"
                  size="small"
                  margin="normal"
                  label="Maximum Off"
                  value={maximumOff}
                  error={errors.maximumOff ? true : false}
                  helperText={errors.maximumOff}
                  onChange={(e) => onChange(e)}
                  name="maximumOff"
                />
              </FormControl>

              <div className="mt-5 w-100">
                <Button
                  style={{
                    backgroundColor: "#EB853B",
                    marginTop: 20,
                    color: "#222",
                    fontWeight: 600,
                    marginRight: 10,
                  }}
                  variant="contained"
                  type="submit"
                  color="primary"
                  className="w-100"
                >
                  Add Coupon
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Grid>
    </Grid>
  );
}
/**
 * The function above is exported as add coupons page
 */
export default AddCoupon;
