import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Form } from "@material-ui/core";
import Sidebar from "../components/profile/seller-sidebar";
import validateInput from "../validations/validationAddProduct";
import { useHistory, useParams } from "react-router-dom";

import {
  InputLabel,
  TextField,
  MenuItem,
  Select,
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
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState("");

  const { id } = useParams("");

  useEffect(() => {
    // Update the document title using the browser API

    if (id) {
      let localData = JSON.parse(localStorage.getItem("productData"));
      if (JSON.stringify(data) != JSON.stringify(localData)) {
        setData(localData);
      }

      let value = localData.find((x) => +x.id == +id);

      if (!category) {
        setCategory(value?.category ?? "");
        setName(value?.name ?? "");
        setImage(value?.image ?? "");
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
  const onChangeFile = (ev) => {
    const reader = new FileReader();
    reader.readAsDataURL(ev.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
  };
  const isValid = () => {
    const { errors, isValid } = validateInput({
      category,
      name,
      serialNo,
      price,
      discount,
      quantity,
      image,
    });
    if (!isValid) {
      setErrors(errors);
    }
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      category,
      name,
      serialNo,
      price,
      discount,
      quantity,
      image,
      id: id ? id : Math.round(Math.random() * 100000),
    };

    if (isValid(data)) {
      if (id) {
        let localData = JSON.parse(localStorage.getItem("productData"));
        let value = localData.findIndex((x) => +x.id == +id);
        localData[value] = data;
        setTimeout(() => {
          localStorage.setItem("productData", JSON.stringify(localData));
          navigate.push("/view-product");
        }, 1000);
      } else {
        if (localStorage.getItem("productData")) {
          let values = JSON.parse(localStorage.getItem("productData"));
          values.push(data);
          localStorage.setItem("productData", JSON.stringify(values));
        } else {
          localStorage.setItem("productData", JSON.stringify([data]));
        }
        navigate.push("/view-product");
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
        <form onSubmit={handleSubmit}>
          <div className="box">
            <div className="border-bottom py-3 text-center">
              <h2>{id ? "Update " : "ADD "} Product</h2>
            </div>
            <div className="p-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Product Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category ?? ""}
                  // value={category ?? ""}

                  label="Product Category"
                  error={errors.category ? true : false}
                  helperText={errors.category}
                  onChange={(e) => onChange(e)}
                  name="category"
                >
                  <MenuItem value="Grocery">Grocery</MenuItem>
                  <MenuItem value="Mobile">Mobile</MenuItem>
                  <MenuItem value="Fashion">Fashion</MenuItem>
                  <MenuItem value="Electronics">Electronics</MenuItem>
                  <MenuItem value="Home">Home</MenuItem>
                  <MenuItem value="Appliances">Appliances</MenuItem>
                  <MenuItem value="Travel">Travel</MenuItem>
                  <MenuItem value="Toys">Toys</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  error={errors.name ? true : false}
                  helperText={errors.name}
                  id="standard-basic"
                  label="Product Name"
                  value={name}
                  // value={name}

                  onChange={(e) => onChange(e)}
                  name="name"
                  variant="standard"
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="standard-basic"
                  error={errors.serialNo ? true : false}
                  helperText={errors.serialNo}
                  label="Serial Number"
                  value={serialNo}
                  // value={serialNo}

                  name="serialNo"
                  onChange={(e) => onChange(e)}
                  variant="standard"
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="standard-basic"
                  label="Price"
                  error={errors.price ? true : false}
                  helperText={errors.price}
                  value={price}
                  price={price}
                  // value={price}
                  name="price"
                  onChange={(e) => onChange(e)}
                  variant="standard"
                />
              </FormControl>

              {!image ? (
                <FormControl fullWidth>
                  <TextField
                    id="image"
                    label="Image"
                    type="file"
                    value={image}
                    // value={image}

                    error={errors.image ? true : false}
                    helperText={errors.image}
                    onChange={(e) => onChangeFile(e)}
                    name="image"
                    variant="standard"
                  />
                </FormControl>
              ) : (
                <label>
                  <img src={image} width="150" height="150" onClick={()=>setImage('')}></img>
                </label>
              )}

              <FormControl fullWidth>
                <TextField
                  id="standard-basic"
                  label="Discount"
                  value={discount}
                  // value={discount}
                  name="discount"
                  error={errors.discount ? true : false}
                  helperText={errors.discount}
                  onChange={(e) => onChange(e)}
                  variant="standard"
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="standard-basic"
                  label="Quantity"
                  value={quantity}
                  // value={quantity}

                  error={errors.quantity ? true : false}
                  helperText={errors.quantity}
                  onChange={(e) => onChange(e)}
                  name="quantity"
                  variant="standard"
                />
              </FormControl>

              <div className="mt-5 w-100">
                <Button style={{ backgroundColor: "#FFBB38", marginTop: 20, color: "#222", fontWeight: 600, marginRight:10 }}
                  variant="contained"
                  type="submit"
                  color="primary"
                  className="w-100"
                >
                  Submit
                </Button>
              </div>
              {/* <form onSubmit={this.handleSubmit}>
              <div>
                <div className="label1 fs14">Select Product Category</div>
                <select
                  className="form-control inpTyp1"
                  onChange={this.onChange}
                  value={this.state.productCategory}
                  name="productCategory"
                >
                  <option value="">Product Category</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Shoes">IT</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                </select>
                <div className="text-danger fs12">{errors.productCategory}</div>
              </div>
              <div>
                <div className="label1 fs14">Enter Product Name</div>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={this.state.productName}
                  name="productName"
                  className="form-control inpTyp1"
                  placeholder="Product Name"
                ></input>
                <div className="text-danger fs12">{errors.productName}</div>
              </div>
              <div>
                <div className="label1 fs14">Upload Image</div>
                {!this.state.image ? (
                  <label for="image">
                    Upload
                  </label>
                ) : (
                  <label for="image">
                    <img src={this.state.image} width="150" height="150"></img>
                  </label>
                )}

                <input
                  id="image"
                  onChange={this.onChangeFile}
                  value={this.state.image}
                  name="image"
                  type="file"
                  className="form-control inpTyp1 d-none"
                  placeholder="Serial Number"
                ></input>
                <div className="text-danger fs12">{errors.image}</div>
              </div>
              <div>
                <div className="label1 fs14">Assign Serial Number</div>
                <input
                  type="text"
                  className="form-control inpTyp1"
                  onChange={this.onChange}
                  value={this.state.serialNumber}
                  name="serialNumber"
                  placeholder="Serial Number"
                ></input>
                <div className="text-danger fs12">{errors.serialNumber}</div>
              </div>
              <div>
                <div className="label1 fs14">Enter Product Quantity</div>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={this.state.quantity}
                  name="quantity"
                  className="form-control inpTyp1"
                  placeholder="Product Quantity"
                ></input>
                <div className="text-danger fs12">{errors.quantity}</div>
              </div>
              <div>
                <div className="label1 fs14">Price</div>
                <input
                  type="number"
                  className="form-control inpTyp1"
                  placeholder="Price"
                  onChange={this.onChange}
                  value={this.state.price}
                  name="price"
                ></input>
                <div className="text-danger fs12">{errors.price}</div>
              </div>
              <div>
                <button type="submit" className="btn btn-success w-100 mt-5">
                  Continue With Details
                </button>
              </div>
            </form> */}
            </div>
          </div>
        </form>
      </Grid>
    </Grid>
  );
}

export default AddProduct;
