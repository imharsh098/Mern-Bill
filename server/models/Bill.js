import mongoose from "mongoose";
const Schema = mongoose.Schema;

const billSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    bills: [
      {
        billno: {
          type: Number,
          required: true,
          unique: true,
        },
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
        gstnum: {
          type: Number,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        phone: {
          type: Number,
          required: true,
          minlength: 10,
        },
        gst: {
          type: String,
          required: true,
          minlength: 14,
        },
        itemname: {
          type: String,
          required: true,
        },
        itemcode: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          default: 0,
        },
        discount: {
          type: Number,
          required: true,
        },
        // taxCharge: {
        //   type: Number,
        // },
        issueDate: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const billModel = mongoose.model("Bill", billSchema, "bills");
export default billModel;
