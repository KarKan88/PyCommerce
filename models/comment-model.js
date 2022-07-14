/*
 * @author: Subash Narayanan
 * Comments: comments of a particular product
 */

const mongoose = require("mongoose");

const comments = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  productId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  cdate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Comment = new mongoose.model("comment", comments);

module.exports = Comment;
