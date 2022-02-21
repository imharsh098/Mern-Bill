import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
// importing models
import User from "../../models/User.js";
import Bill from "../../models/Bill.js";
import sendPhone from "../../helpers/sendPhone.js";
// importing validations
import {
  errorMiddleware,
  registrationRules,
  loginRules,
} from "../../middlewares/validations/index.js";
// importing helpers
import generateToken from "../../helpers/generateToken.js";
import verifyToken from "../../middlewares/auth/index.js";

/*
      API EndPoint : /api/users/register
      Method : POST
      Payload : Request.Body - name,email,password
      Access Type : Public
      Validations : 
          a) Check Valid Email,name and password
      Description : User Registration 
*/
router.get("/rex", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.send(error);
  }
});

router.post(
  "/register",
  registrationRules(),
  errorMiddleware,
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const duplicate = await User.findOne({ email });
      if (duplicate) {
        return res
          .status(401)
          .json({ msg: "User already exists,please try to login" });
      }
      const newUser = new User(req.body);
      const newbill = new Bill({
        user: newUser._id,
      });
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
      await newUser.save();
      await newbill.save();
      sendPhone("Thank You for registering on BillBook");
      res.status(200).json({
        _id: newUser._id,
        email: newUser.email,
        token: generateToken(newUser._id),
        clientname: newUser.clientname,
        companyname: newUser.companyname,
        address: newUser.address,
        phone: newUser.phone,
        gst: newUser.gst,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
);

/*
      API EndPoint : /api/users/login
      Method : POST
      Payload : Request.Body - email,password
      Access Type : Public
      Validations : 
          a) Check Valid Email and verify if password is the same
      Description : User Login 
*/
router.post("/login", loginRules(), errorMiddleware, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "Invalid Login credentials" });
    }
    let correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(401).json({ msg: "Invalid Login credentials" });
    }
    res.status(200).json({
      _id: user._id,
      email: user.email,
      clientname: user.clientname,
      companyname: user.companyname,
      address: user.address,
      phone: user.phone,
      gst: user.gst,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

/*
      API EndPoint : /api/users/profile
      Method : PUT
      Payload : Extract _id from access token (x-auth-token from headers)
      Access Type : Private/User
      Description : User Update Profile  
*/
// response format same as register route (no validation rules needed)

router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(401).json({ msg: "Can't find user" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;
