import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  clientname: {
    type: String,
    required: true,
    minlength: 2,
  },
  companyname: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
    unique: true,
  },
  gst: {
    type: String,
    required: true,
    minlength: 14,
    unique: true,
  },
});

const userModel = new mongoose.model("User", userSchema, "users");

export default userModel;
