import express from "express";
const router = express.Router();
// importing models
// import User from "../../models/User.js";
import Bill from "../../models/Bill.js";
// importing validations
import {
  billRules,
  errorMiddleware,
} from "../../middlewares/validations/index.js";
import verifyToken from "../../middlewares/auth/index.js";

router.get("/get", verifyToken, errorMiddleware, async (req, res) => {
  try {
    const billDetail = await Bill.findOne({ user: req.user._id });
    return res.status(200).json(billDetail.bills);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

router.post(
  "/addbill",
  verifyToken,
  billRules(),
  errorMiddleware,
  async (req, res) => {
    try {
      const billDetail = await Bill.findOne({ user: req.user._id });
      if (!billDetail) {
        return res.json({ msg: "User doesn't exists" });
      }
      billDetail.bills.push(req.body);
      await billDetail.save();
      return res.status(200).json({
        _id: billDetail._id,
        bill: billDetail.bills,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
);

router.delete("/delete/:id", verifyToken, errorMiddleware, async (req, res) => {
  try {
    const billDetail = await Bill.findOne({ user: req.user._id });
    billDetail.bills = billDetail.bills.filter(
      (ele) => ele._id != req.params.id
    );
    await billDetail.save();
    res.json(billDetail.bills);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;
