const Coupon = require("../models/coupon-model");

const listCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


const addCoupon = async (req, res) => {
    const couponData = {
        couponCode:req.body.couponCode,
        couponCondition:req.body.couponCondition,
        couponDiscount: req.body.couponDiscount,
        maximumOff: req.body.maximumOff
    };
    try {
      const coupon = new Coupon(couponData);
      await coupon.save();
      res.json();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  };

  const updateCouponById = async (req, res) => {
    try {
      await Coupon.findByIdAndUpdate(req.params.id, {
        couponCode:req.body.couponCode,
        couponCondition:req.body.couponCondition,
        couponDiscount: req.body.couponDiscount,
        maximumOff: req.body.maximumOff
    }, {new: true});
      res.json({
              success: true,
              message: "Coupon Updated"
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  const deleteCouponById = async (req, res) => {
    try {
      await Coupon.findByIdAndRemove(req.params.id);
      res.json({
              success: true,
              message: "Coupon Deleted"
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  module.exports = {
    listCoupons,
    addCoupon,
    updateCouponById,
    deleteCouponById
  };