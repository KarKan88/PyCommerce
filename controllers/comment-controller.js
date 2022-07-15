/*
 * @author: Subash Narayanan
 */

const mongoose = require("mongoose");
const Comment = require("../models/comment-model");
const userModel = require("../models/user-model");

const addComment = async (req, res) => {
  //var emailAddress = localStorage.getItem("emailAddress");
  const getUser = await userModel.find({ emailAddress: req.body.userId });
  console.log(getUser);
  console.log(typeof getUser[0]);
  console.log(getUser[0]);
  user = getUser[0];
  console.log(user);
  console.log(user["fname"]);
  console.log(user.fname);

  const { fname: userName } = user;

  console.log(userName);

  const com = {
    userId: req.body.userId,
    productId: req.body.productId,
    name: user.fname,
    rating: req.body.rating,
    title: req.body.title,
    comment: req.body.comment,
    cdate: req.body.cdate,
  };

  try {
    const newComment = new Comment(com);
    //creating new user model in the DB
    await newComment.save();

    res.status(201).json({
      message: "Review added sucessfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error " + err,
    });
  }
};

const getCommentByProductId = async (req, res) => {
  const productid = req.params.id;
  try {
    const result = await Comment.find({ productId: productid });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  addComment,
  getCommentByProductId,
};
