/*
 * @author: Subash Narayanan
 */

const commentModel = require("../models/comment-model");

const addComment = async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const name = req.body.name;
  const rating = req.body.rating;
  const Title = req.body.Title;
  const Comment = req.body.Comment;
  const CDate = req.body.CDate;

  try {
    //creating new user model in the DB
    await commentModel.create({
      userId,
      productId,
      name,
      rating,
      Title,
      Comment,
      CDate,
    });
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
  const productid = req.params.productId;
  try {
    const result = await commentModel.find({ productId: productid });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  addComment,
  getCommentByProductId,
};
