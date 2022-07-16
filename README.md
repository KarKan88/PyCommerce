# PyCommerce

The purpose of PYCOMMERCE is to provide a smooth and easy-to-use eCommerce website for both customers and retailers, where we can effortlessly buy and sell online products.

The purpose of PYCOMMERCE is to provide a smooth and easy-to-use eCommerce website for both customers and retailers, where we can effortlessly buy and sell online products.

Assignment 3 - Group Submission

- _Date Created_: 15 July 2022
- _Last Modification Date_: 15 July 2022
- _Git URL Repository_: <https://git.cs.dal.ca/adimurthy/csci-5709-group-16>
- _Deployed Application_: <https://pycommerce-16.herokuapp.com/>

## Author

- [Adesh Nalpet Adimurthy](adesh.nalpet@dal.ca) - Full Stack Developer [Initial Setup](https://git.cs.dal.ca/adimurthy/csci-5709-group-16/-/tree/main), [Proxy Individual Branch](https://git.cs.dal.ca/adimurthy/csci-5709-group-16/-/tree/stage/b00886154).
- Dhruvrajsinh Omkarsinh Vansia - Full Stack Developer [Individual git branch link]()
- [Hemanth Nadipineni] (hemanth@dal.ca) - Full Stack Developer [Individual git branch link 1](https://git.cs.dal.ca/adimurthy/csci-5709-group-16/-/tree/develop/B00899473) [Individual git branch link 2](https://git.cs.dal.ca/adimurthy/csci-5709-group-16/-/tree/dev-hn) [Individual git branch link 3](https://git.cs.dal.ca/adimurthy/csci-5709-group-16/-/tree/dev2-hn) [Individual git branch link 4](https://git.cs.dal.ca/adimurthy/csci-5709-group-16/-/tree/server-hn)
- [Indu Munagapati](indu@dal.ca) - Full Stack Developer [Individual git branch link](https://git.cs.dal.ca/adimurthy/csci-5709-group-16/-/tree/stage/B00903180)
- Karthik Kannan Nanthakumar - Full Stack Developer [Individual git branch link]()
- Meghdoot Ojha - Full Stack Developer [Individual git branch link]()
- Subash Narayanan(sb742704@dal.ca) - Full Stack Developer [Individual git branch link](https://git.cs.dal.ca/adimurthy/csci-5709-group-16/-/tree/stage/B00899481/)

## Overview

The eCommerce application is built on the MERN stack. The client is a react application and heavily uses the Material UI component library. The server is a NodeJS + Express application with MongoDB as the NoSQL data store with mongoose to quickly model; the backend is for CRUD operations on all the models. On the other hand, the majority of the work was on the client-side. Ideally, most of the data is either configurable or dynamically loaded by calling the backend APIs. For early prototyping, the products and adding products to the wishlist are dynamic. However, the banner, offers, deals, and featured brands on the home page are static.

## Features

## User Authentication
User Authentication offers the following features:

- Login - Registered users can login into the website using an email address and password
- Registration - Any user can register to the website by filling the required fields in the form
- Forgot password - Registered users can click on forgot password and can change the password by filling in the correct email address and two security questions answered while registering with the website. This is to ensure two-way authentication.
- Seller Registration: After login into the website, there is a button “Become a Seller”, clicking which seller can register by filling the required fields.

## Product Dashboard

- Backend APIs to add, get all products or by categories and get a specific product details.
- Home page to show various products across categories.
- Categories page to show all products that belong to a category.
- Product details page to show specific details of a product.
- Ability to search for a product by entering a few keywords.

# Favorites

- Backend APIs to get all favorites and delete an item in favorites (a mapping between user-id and product-id).
- Ability to add/remove product to/from favorites from product details page.
- Ability to view all favorites from profile page and delete items from the same list.

## Coupon Management - Hemanth

By providing coupons and discounts to first-time online shoppers, this feature hopes to persuade users to use our platform. Seasonal coupons for the customers, such as Christmas specials, Black Friday promotions, etc. Idle shoppers, or those who haven't placed an order on our platform in about three months. Once a seller wants to create a coupon, he can click on the link provided in his dashboard, and it will get to the coupon management portal. The user can use the coupons the system will validate the code with the ones stored in the coupon management system. Following are the managing options available for the coupon system:

- Add: A seller can use this system to access and add a new coupon to the system. All the required validation rules have to be presented. A customer doesn’t have access to use this section.

- Edit: A seller can use this system to access and edit an existing coupon to the system. The same validation rules for adding the coupon implies to the edit section. A customer doesn’t have access to use this section.

- Delete: A seller or an admin can use this system to access and delete a coupon from the system. A customer doesn’t have access to use this section.

- Validate: A customer can provide a coupon while checking out and the system will validate the coupon that was added by any seller.

## Getting Started

## Prerequisites

- Local MongoDB set-up or Atlas (MongoDB):
  - Create an [Atlas Account](https://www.mongodb.com/docs/atlas/getting-started/)
  - Choose free tier plan and create a shared cluster.
  - Copy of Host with username and password.

## Installing

### Local Set-up

- Add mongoDB configuration to a `.env` file. Refer to `.env.example` for the the content of `.env` (to initialize mongoose at `config/db-connection.js`)
- Start Server: `npm install && npm run start`
- Start Client: `cd client` & `npm install && npm run start`

## Schema

- For the sake of demonstration, the application's actions such as login/register, add to cart, delivery, shipping, etc are mocked.
- The only models used in the backend (MongoDB) are: `Cart`, `Favorite`, `Product` and `cart`.

## Project Structure:

- [Kebab Case](https://www.upbeatcode.com/react/react-naming-conventions/) Naming convention

### Client-side (React)

- components: individual standalone, reusable sections of the application.
- action-type: Represents the different operations performed in a component. For example: the favorites component has operations such as "getFavorites", "addToFavorites" and "removeFromFavorites"
- actions: the implementation of action-type, uses axios to make API calls to the backend to perform the action-types.
- constants: hard coded static content segregated together in one place for easier access.
- pages: Individual pages of the application, each page is usually a combination of different components. Example: Home page and Favorites page.
- reducers: an abstraction for state management and receives input of the current/initiate state and the action as the input and returns the new state.
- styles: css files for pages.
- utils: static generic functions.

### Backend (NodeJS)

- routes: List of APIs with path and the controller to visit to process a request.
- controller: The business logic layer with dependency on the service layer to perform the necessary actions.
- models: Schema of database models stored in MongoDB.
- logs: path to store application logs (rolling logs).

## Deployment

### Heroku Set-up

- Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- Login and Create a project: `heroku login` and `heroku create <unique-project-name>`
- Add atlas (mongoDB) env variables: Project → Settings → Config Vars
- Deploy: `git push heroku master`

## Image Sizes

- Category Icon: `128 x 128`
- Banner (Top Slider): `1000 x 165`
- Ad Banner: `1000 x 85`
- Product: `500 x 540`
- Featured Brands: `1000 x 540`
- Poster Slider: `1000 x 615`

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Material UI](https://mui.com/) - A comprehensive suite of UI tools and production-ready components
- [NodeJS](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - A source-available cross-platform document-oriented database

## Sources Used

### File: featured.js

```
<Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="all 200ms"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
```

While it was not a direct code reference that was modified, the prime reference was from [react-multi-carousel](https://github.com/YIZHUANG/react-multi-carousel/blob/master/examples/ssr/pages/index.js). Which is also the library I used for carousel(s) in the entire application.

- The parts of code in `featured.js` was implemented by `react-multi-carousel` (examples in official documentation).
- `featured.js`'s Code was used because I had a simple use case and the example in the documentation had just what I needed
- `featured.js`'s Code was modified to add additional parameters and CSS classes such as `carousel-container`.

### File: error-page.js

- Self Attribution
- Created by Adesh Nalpet Adimurthy previously for the blog [https://pyblog.xyz](https://pyblog.xyz)

```
<div
      style={{
        textAlign: "center",
        fontSize: "14px",
        padding: "20px",
        marginTop: "100px",
      }}
    >
      <div>
        <img
          style={{ width: "450px", maxWidth: "100%" }}
          src="/images/404.png"
          alt=""
        />
        <div
          style={{
            fontSize: "1.3em",
            paddingTop: "10px",
            marginBottom: "35px",
          }}
        >
          Unfortunately the page you are looking for has been moved or deleted
        </div>
        <Button
          style={{ backgroundColor: "#222" }}
          variant="contained"
          color="primary"
        >
          <Link to="/">GO TO HOMEPAGE</Link>
        </Button>
      </div>
    </div>
```

- The parts of code in `error-page.js` was implemented by `Adesh Nalpet Adimurthy (Self Attribution)`.
- `error-page.js`'s Code was used because I had previously written a generic simple 404 page for an other react website.
- `error-page.js`'s Code was modified to add additional CSS for design consistency and the image(s).

### Folder: images

- Self Attribution
- Created using [ProCreate](https://procreate.art/) by Adesh Nalpet Adimurthy

### File: cart-page

```
  const sliderItems: number = data.length > 3 ? 3 : data.length;
  const items: Array<any> = [];

  for (let i = 0; i < data.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Card raised className="Banner" key={i.toString()}>
          <Grid container spacing={0} className="BannerGrid">
            {data.slice(i, i + sliderItems).map((da, index) => {
              return <SubCategory key={index.toString()} item={da} />;
            })}
          </Grid>
        </Card>
      );
    }
  }
```

To set multiple items in the carousel, the code has been taken from stackoverflow (https://stackoverflow.com/questions/66861638/multiple-items-on-material-ui-carousel).
It has modiifed later on to change grid styling and size of slider.

### File: addproduct.js

```
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
</Box>

```

- The text fields reference of code in `addproduct.js` was taken from React Material UI sute (https://mui.com/material-ui/react-text-field/).
- It is fully modified according to our global design.
- Additional elements like Form control and grids are used with the text fields.

### CouponForm.js

- Created by Hemanth Nadipineni

_Lines 72 - 126_

```

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Coupon Code</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="couponcode"
            value={couponcode}
            placeholder="Enter the coupon code"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="condition">
          <Form.Label>Coupon Eligibility</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="condition"
            value={condition}
            placeholder="Enter a condition for the couponcode"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="maxdiscount">
          <Form.Label>Discount Percentage</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="maxdiscount"
            value={maxdiscount}
            placeholder="Enter the percentage of discount"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="discountpercentage">
          <Form.Label>Maximum Amount of Discount</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="discountpercentage"
            value={discountpercentage}
            placeholder="Enter the maximum amount of discount"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="outline-light" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

```

The code above was created by adapting the code in [Building a CRUD App with React and Local Storage](https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage) as shown below:

```
const AddTask = ({onSave}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  return (
      <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
              <label>Task</label>
              <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="form-control">
              <label>Day & Time</label>
              <input type="text" placeholder="add day & time" value={day} onChange{(e) => setDay(e.target.value)} />
          </div>
          <input type="submit" className="btn btn-block" value="Save Task" />
      </form>
    )
}
export default AddTask

```

- <!---How---> The code in [Building a CRUD App with React and Local Storage](https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage) was implemented by Arimoro Olamilekan.
- <!---Why---> [Building a CRUD App with React and Local Storage](https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage)'s Code was used because the forms in react are crucial for adding and the code referenced to create a similar form.
- <!---How---> [Building a CRUD App with React and Local Storage](https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage)'s Code was modified according to the requirements of the feature.

### Coupon.js

- Created by Hemanth Nadipineni

_Lines 17 - 33_

```
   <Card style={{ width: '18rem' }} className="coupon">
      <Card.Body>
        <Card.Title className="copoun-ti">{couponcode}</Card.Title>


        <div className="copoun-de">
          <div>Condition: {condition}</div>
          <div>Maximum_Amount_OFF: {maxdiscount} </div>
          <div>Discount_Percentage: {discountpercentage} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>



        <Button variant="outline-secondary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="outline-danger" onClick={() => handleRemoveCoupon(id)}>
          Delete
        </Button>


      </Card.Body>
    </Card>

```

The code above was created by adapting the code in [React CRUD App Tutorial](https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/) as shown below:

```
  <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>

```

- <!---How---> The code in [React CRUD App Tutorial](https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/) was implemented by Yogesh Chavan
- <!---Why---> [React CRUD App Tutorial](https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/)'s Code was used because it was resuable code to list the coupons. Therefore the tutorial has been taken as a reference.
- <!---How---> [React CRUD App Tutorial](https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/)'s Code was modified as per the requirement of the task.

### File: addcoupon.js

- Created by Hemanth Nadipineni

_Lines 151 - 164_

```
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div>
    </Box>
  );
}


```

- The form has been taken from Material UI Forms (https://mui.com/material-ui/react-text-field/) and modified according to the use case and validations have been added.

### UseLocalStorage.js

- Created by Hemanth Nadipineni

_Lines 04 - 15_

```

const [value, setValue] = useState(() => {
try {
const localValue = window.localStorage.getItem(key);
return localValue ? JSON.parse(localValue) : initialValue;
} catch (error) {
return initialValue;
}
});

useEffect(() => {
window.localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);

```

The code above was created by adapting the code in [Building a CRUD App with React and Local Storage](https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage) as shown below:

```

const addTask = (task) => {
const id = uuidv4();
const newTask = { id, ...task }
setTasks([...tasks, newTask]);
Swal.fire({
icon: 'success',
title: 'Yay...',
text: 'You have successfully added a new task!'
})
localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
}

```

### comment.jsx

_Lines 12 - 51_

```

            <Card style={{ paddingTop: "10px" }}>
        <Stack direction="row" spacing={3} mt={2} ml={2}>
          <Avatar>{props.avatar}</Avatar>
          <h4 style={{ marginLeft: "10px", paddingTop: "1%" }}>
            {" "}
            {props.name}
          </h4>
          <Rating
            style={{ marginLeft: "10px", paddingTop: "1%" }}
            value={Number(rate)}
            readOnly
          />
          <h4 style={{ marginLeft: "10px", float: "right", paddingTop: "1%" }}>
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(props.cdate)}
          </h4>
        </Stack>
        <Stack>
          <h4
            style={{
              paddingLeft: "2%",
              paddingTop: "2%",
            }}
          >
            {props.title}
          </h4>
          <p
            style={{
              marginBottom: "30px",
              paddingLeft: "2%",
              paddingTop: "10px",
            }}
          >
            {props.commnet}
          </p>
        </Stack>
      </Card>
```

The code above was created by adapting the code in [MUI] components
1 Card : (https://mui.com/material-ui/react-card/#main-content)
2 Stack : (https://mui.com/material-ui/react-stack/)
3 Avatar : (https://mui.com/material-ui/react-avatar/)
4 Rating : (https://mui.com/material-ui/react-rating/#main-content) rating controlled review section and also read only was used in comment section

- The code in [MUI](https://mui.com/material-ui/) was implemented by MUI developers
- Modified and used by subash narayana (sb742704@dal.ca)

### Createarea.jsx

_line 35 - 60_

```
  <form>
        <h4 style={{ paddingTop: "10px" }}>Title</h4>
        <input
          name="Name"
          onChange={handleChange}
          value={note.Name}
          placeholder="Your Name"
        />
        <h4 style={{ paddingTop: "10px" }}>Rate the product</h4>
        <Rating
          style={{ paddingBottom: "10px", paddingTop: "5px" }}
          name="Rating"
          value={note.Rating}
          onChange={handleChange}
        />
        <h4 style={{ paddingTop: "10px" }}>Your Experience </h4>
        <textarea
          name="Comment"
          onChange={handleChange}
          value={note.Comment}
          placeholder="Please add your experince about the product"
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
  </form>
```

was referenced from https://reactjs.org/docs/forms.html and undrstaing the components through https://codepen.io/gaearon/pen/VmmPgp?editors=0010

### CommentComponent.js

```
<Box sx={{ marginTop: "10px" }}>
      <Grid
        container
        spacing={2}
        style={{ paddingTop: "2%", marginTop: "1%" }}
        justifyContent="flex-end"
      >
        <Grid item xs={12} md={8} sm={12}>
          <h2> REVIEWS AND RATINGS</h2>
        </Grid>
        <Grid item xs={12} md={2} sm={6}>
          <Button
            onClick={handleOpen}
            style={{
              paddingTop: "10px",
              marginTop: "5px",
              backgroundColor: "#FFBB38",
              color: "black",
            }}
            variant="contained"
          >
            POST REVIEW
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <CreateArea onAdd={addNote} />
              </Box>
            </Fade>
          </Modal>
          <ToastMessageContainer />
        </Grid>
        <Grid item xs={12} md={2} sm={6}>
          {form()}
        </Grid>
      </Grid>

      <Grid container spacing={5} sm={12}>
        {/* <Grid item xs={2}></Grid> */}
        <Grid item xs={12}>
          {CompleteData.map(createComment)}
        </Grid>
      </Grid>
    </Box>
```

The code above was created by adapting the code in [MUI] components
1 Card : (https://mui.com/material-ui/react-card/#main-content)
2 Stack : (https://mui.com/material-ui/react-stack/)
3 Avatar : (https://mui.com/material-ui/react-avatar/)
4 Rating : (https://mui.com/material-ui/react-rating/#main-content) rating controlled review section and also read only was used in comment section

- The code in [MUI](https://mui.com/material-ui/) was implemented by MUI developers
- Modified and used by subash narayana (sb742704@dal.ca)

- <!---How---> The code in [Building a CRUD App with React and Local Storage](https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage) was implemented by Arimoro Olamilekan.
- <!---Why---> [Building a CRUD App with React and Local Storage](https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage)'s Code was used because the local storage had to be used as we are not implementing the backend.
- <!---How---> [Building a CRUD App with React and Local Storage](https://egghead.io/blog/building-a-crud-app-with-react-and-local-storage)'s Code was modified according to the requirements of the storage.

### Registration.js

- Created by Indu Munagapati

_Lines 317 - 327

```
   <TextField style ={{backgroundColor: "#fff"}}
                        fullWidth
                        variant="filled"
                        size="small"
                        margin="normal"
                        name="firstname"
                        label="First Name"
                        type="text"
                        value={firstName}
                        onChange={onHandleFirstName}
                        required/>


```

- The text fields reference of code in `Registration.js` was taken from React Material UI site (https://mui.com/material-ui/react-text-field/).
- It is modified according to the global design.
- Additional elements like Form control and grids are used with the text fields.

_Lines 450 - 469

```
   <Dialog
      open={openDialog}
      onClose={onHandleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
     >
      <DialogTitle id="alert-dialog-title">
          Successfully Registered !!!
      </DialogTitle>
      <DialogContent style={{padding:"5%"}}>
        <DialogContentText id="alert-dialog-description">
          Click ok to Login
        </DialogContentText>
      </DialogContent>
        <DialogActions>
          <Button variant="contained" size="small" onClick={onHandleClose} style={{backgroundColor: "blue", color:"white"}}>
            <b>ok</b>
           </Button>
        </DialogActions>
      </Dialog>
```

- The Dialog reference of code in `Registration.js` was taken from React Material UI site (https://mui.com/material-ui/react-dialog/#main-content).
- It is used to pop up the dialog box when user registers.
- The code was modified to user clicks on submit buttion to show the dialog box.

\_Lines 113

```
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

```

- The password regex reference of code in `Registration.js` was taken from this site (https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a).
- It is used to validate the password field.
- The code was modified to user clicks on password and validates using this regex.

_Lines 153

```
let phNumberRegex = /^[0-9]{10}$/;

```

- The password regex reference of code in `Registration.js` was taken from React Material UI site (https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number).
- It is used to validate the phone number field.
- The code was modified to user clicks on phone number and validates using this regex.

### authentication.js

- Created by Indu Munagapati

_Lines 29-31_

```
const token = jwt.sign(
        {emailAddress}, "WEBGROUP16"
    );
```

The code above was created by adapting the code in [Authentication API with JWT Token](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/) as shown below:

```
const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

```

- The code in [Authentication API with JWT Token](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/) was implemented by this https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/ website.
- [Authentication API with JWT Token](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/)'s Code was used to create a JWT.
- [Authentication API with JWT Token](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/)'s Code was modified to create a JWT while login.

_Lines 12_

```
jwt.verify(token, "WEBGROUP16", (err, decode) => {
```

The code above was created by adapting the code in [Authentication API with JWT Token](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/) as shown below:

```
const decoded = jwt.verify(token, config.TOKEN_KEY);
```

- The code in [Authentication API with JWT Token](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/) was implemented by this https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/ website.
- [Authentication API with JWT Token](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/)'s Code was used to verify the JWT.
- [Authentication API with JWT Token](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/)'s Code was modified to verify the JWT while it is called.

## References

```

[1] Rukminim1, “Ecommerce Images,” GitHub, May 26, 2022. https://rukminim1.flixcart.com/ (accessed Jun. 01, 2022).

[2] “Amazon.ca: Online shopping in Canada” Amazon.ca, 2019. https://www.amazon.ca/ (accessed Jun. 01, 2022).

[3] Walmart, “Walmart,” Walmart.ca, 2019. https://www.walmart.ca/en (accessed Jun. 01, 2022).

[4] “React Best Practices and Security,” TatvaSoft Blog. https://www.tatvasoft.com/blog/reactjs-best-practices/ (accessed Jun. 04, 2022).

[5] A. N. Adimurthy, “PyCommerce,” GitHub. https://github.com/addu390/py-commerce/blob/master/client/src/pages/error-page.js (accessed Jun. 02, 2022).

[6] Figma, “Figma: the collaborative interface design tool.,” Figma, 2019. https://www.figma.com/ (accessed Jun. 03, 2022).

[7] “Flowchart Maker & Online Diagram Software,” app.diagrams.net. https://draw.io/ (accessed May. 30, 2022).

[8] W3C, “The W3C Markup Validation Service,” W3.org, 2013. https://validator.w3.org/ (accessed Jun. 04, 2022)

[9] “MUI: The React component library you always wanted,” mui.com. https://mui.com/ (accessed May. 30, 2022).

[10] Node.js Foundation, “Node.js,” Node.js, 2019. https://nodejs.org/en/ (accessed May. 30, 2022).
‌
[11] MongoDB, “The most popular database for modern apps,” MongoDB, 2019. https://www.mongodb.com/ (accessed May. 30, 2022).
‌
[12] Facebook, “React – A JavaScript library for building user interfaces,” Reactjs.org, 2022. https://reactjs.org/ (accessed May. 30, 2022).

[13] Pyblog, “pyblog.xyz“, 2021. https://pyblog.xyz (accessed Jun. 01, 2022).

[14] Bibliography

[15] J. Au-Yeung, “Material UI — Text Field Basics,” Dev Genius, Oct. 08, 2020. https://blog.devgenius.io/material-ui-text-field-basics-b5813c6ecf6e (accessed Jun. 16, 2022).

[16] Email - https://regexr.com/3e48o

[17] Name - https://regexr.com/3f8cm

[18] Password - https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

[19] Phone number - https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number

[20] Authentication API with JWT Token - https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/


```
```
