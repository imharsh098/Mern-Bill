import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addBill } from "../actions/billActions";
import "../css/newbill.css";

function Newbill() {
  const billData = useSelector((state) => state.billData);
  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = userLogin["userInfo"];
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBill({
        clientname: data.clientname,
        companyname: data.companyname,
        email: data.email,
        gstnum: data.gstnum,
        gst: data.gst,
        itemname: data.itemname,
        itemcode: data.itemcode,
        quantity: data.quantity,
        price: data.price,
        discount: data.discount,
        phone: data.phone,
        billno: data.billno,
        issueDate: data.issueDate,
        address: data.address,
      })
    );
    setData({
      clientname: "",
      companyname: "",
      email: "",
      gstnum: "",
      gst: "",
      itemname: "",
      itemcode: "",
      quantity: "",
      price: "",
      discount: "",
      phone: "",
      billno: "",
      issueDate: "",
      address: "",
    });
  };

  const [data, setData] = useState({
    clientname: "",
    companyname: "",
    email: "",
    gstnum: "",
    gst: "",
    itemname: "",
    itemcode: "",
    quantity: "",
    price: "",
    discount: "",
    phone: "",
    billno: "",
    issueDate: "",
    address: "",
  });
  const getBack = () => {
    history("/");
  };
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="page">
      <div style={{ marginLeft: "1rem" }} onClick={getBack}>
        <img
          src="images/back.png"
          style={{ width: "25px", height: "30px", marginTop: "1rem" }}
        />
      </div>
      <div className="headinvoice">Invoice</div>
      <form id="billform" onSubmit={handleSubmit}>
        <div id="headerinvoice">
          <div id="issueDate">
            <span>Issue Date</span>
            <input
              type="date"
              name="issueDate"
              placeholder="Issue Date"
              onChange={onChange}
              value={data.issueDate}
            />
          </div>
          <div id="InvoiceNo">
            <span>Inovice No.</span>
            <input
              type="number"
              id="billno"
              name="billno"
              onChange={onChange}
              value={data.billno}
            />
          </div>
        </div>
        <div id="headerinvoice2">
          <div id="email">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={data.email}
              style={{ marginLeft: "4.5rem", width: "45%" }}
            />
          </div>
          <div id="Phone No.">
            <span>Phone No.</span>
            <input
              type="number"
              id="Phone"
              name="phone"
              onChange={onChange}
              value={data.phone}
            />
          </div>
        </div>
        <div id="middle">
          <div id="leftmiddle">
            <div id="company">
              <span>Company Name</span>
              <input
                type="text"
                name="companyname"
                id="company"
                onChange={onChange}
                value={data.companyname}
              />
            </div>
            <div id="client">
              <span>Client Name</span>
              <input
                type="text"
                name="clientname"
                onChange={onChange}
                value={data.clientname}
                style={{ marginLeft: "4.2rem" }}
              />
            </div>
            <div id="gst">
              <span>GST No</span>
              <input
                type="text"
                name="gst"
                id="gst"
                onChange={onChange}
                value={data.gst}
                style={{ marginLeft: "7rem" }}
              />
            </div>
          </div>
          <div id="rightmiddle">
            <span style={{ fontSize: "3rem" }}>Address</span>
            <input
              type="address"
              placeholder="address"
              name="address"
              onChange={onChange}
              value={data.address}
              style={{
                marginLeft: "1.2rem",
                fontSize: "1.5rem",
                height: "8.2rem",
              }}
            />
          </div>
        </div>
        <div id="down">
          <div id="itemname" style={{ width: "25%" }}>
            Item Name
          </div>
          <div id="itemcode">Item Code</div>
          <div id="price">Price</div>
          <div id="quantity">Quantity</div>
          <div id="gstp">GST %</div>
          <div id="discount">DIS %</div>
        </div>
        <div id="down2">
          <input
            type="text"
            name="itemname"
            style={{ width: "25%" }}
            onChange={onChange}
            value={data.itemname}
          />
          <input
            type="text"
            name="itemcode"
            value={data.itemcode}
            onChange={onChange}
          />
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={onChange}
          />
          <input
            type="number"
            name="quantity"
            value={data.quantity}
            onChange={onChange}
          />
          <input
            type="number"
            name="gstnum"
            value={data.gstnum}
            onChange={onChange}
          />
          <input
            type="number"
            name="discount"
            value={data.discount}
            onChange={onChange}
          />
        </div>
        <div id="downbtn">
          <div id="total">
            <span>Total</span>
            <span style={{ border: "2px solid black", borderRadius: "15px" }}>
              {data.price}
            </span>
          </div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Newbill;
