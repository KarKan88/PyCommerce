import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function CreateArea(props) {
  const [note, setNote] = useState({
    Avatar: "CU",
    Name: "CurrentUser",
    Rating: "",
    Title: "",
    Comment: "",
    CDate: Date.now,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      Avatar: "CU",
      Name: "CurrentUser",
      Rating: "",
      Title: "",
      Comment: "",
      CDate: Date.now,
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <h2 style={{ alignSelf: "center" }}> REVIEW </h2>
        <Stack spacing={1}>
          <h4 style={{ paddingTop: "10px" }}>Title</h4>
          <input
            name="Title"
            onChange={handleChange}
            value={note.Title}
            placeholder="Title"
            style={{
              color: "#646E78",
              padding: "6px",
            }}
          />
          <h4 style={{ paddingTop: "10px" }}>Rate the product</h4>
          <Rating
            style={{ paddingBottom: "10px", paddingTop: "5px" }}
            name="Rating"
            value={Number(note.Rating)}
            onChange={handleChange}
          />
          <h4 style={{ paddingTop: "10px" }}>Your Experience </h4>
          <textarea
            name="Comment"
            onChange={handleChange}
            value={note.Comment}
            placeholder="Please add your experince about the product"
            rows="3"
            style={{
              color: "#646E78",
              padding: "6px",
            }}
          />

          <Button
            onClick={submitNote}
            variant="contained"
            style={{
              backgroundColor: "#FFBB38",
              color: "black",
              paddingTop: "6px",
            }}
          >
            Add Review
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default CreateArea;
