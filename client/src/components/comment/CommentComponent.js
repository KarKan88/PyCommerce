import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";
import data from "./mockData";
import Comment from "./Comment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

function createComment(object) {
  return (
    <Comment
      avatar={object.Avatar}
      name={object.Name}
      commnet={object.Comment}
      rating={object.Rating}
      date={object.CDate}
      title={object.Title}
    />
  );
}

const state = {
  FiveStar: true,
  FourStar: false,
  ThreeStar: false,
  TwoStar: false,
  OneStar: false,
};

const handleChange = (event) => {};

function CommentComponent() {
  const [CompleteData, setCompleteData] = React.useState(data);
  const [Checkbox, setCheckedbox] = useState(state);
  const [sort, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const form = () => {
    return (
      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">SORT</InputLabel>
        <Select value={sort} label="sort" onChange={handleChange}>
          <MenuItem value={10}>MOST RECENT</MenuItem>
          <MenuItem value={20}>OLDEST FIRST</MenuItem>
          <MenuItem value={30}>LOW TO HIGH</MenuItem>
          <MenuItem value={30}>HIGH TO LOW</MenuItem>
        </Select>
      </FormControl>
    );
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      <Grid container spacing={2} style={{ paddingTop: "2%", marginTop: "1%" }}>
        <Grid item xs={6}>
          <h2> REVIEWS AND RATINGS</h2>
        </Grid>
        <Grid item xs={3}>
          <Button
            style={{
              backgroundColor: "#FFBB38",
              color: "black",
            }}
            variant="contained"
          >
            Contained
          </Button>
        </Grid>
        <Grid item xs={3}>
          {form()}
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        {/* <Grid item xs={2}></Grid> */}
        <Grid item xs={12}>
          {CompleteData.map(createComment)}
        </Grid>
      </Grid>
    </Box>
  );
}

export default CommentComponent;
