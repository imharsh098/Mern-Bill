import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import { listbills } from "../actions/billActions";
import { jsPDF } from "jspdf";
import "../css/table.css";

function Billinfo() {
  const [profile, setProfile] = useState({});
  const billData = useSelector((state) => state.billData);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { bills } = billData;
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      history("/login");
    }
    if (userInfo) {
      dispatch(listbills());
    }
  }, []);
  // const getpdf = (pdf) => {
  //   const doc = new jsPDF();
  //   doc.text(pdf.itemcode, 10, 10);
  //   doc.text(pdf.price, 10, 10);
  //   doc.text(pdf.quantity, 10, 10);
  //   doc.text(pdf.discount, 10, 10);
  //   doc.text(pdf.itemname, 10, 10);
  //   doc.save("a4.pdf");
  // };
  return (
    <>
      <div className="left" style={{ width: "30%" }}>
        <Profile profile={profile} />
      </div>
      <div className="right" style={{ width: "70%" }}>
        <div className="body">
          <section className="section">
            <div className="h11">
              <h1>Bill Details</h1>
            </div>
            <div className="tbl-header">
              <table className="tbl">
                <thead>
                  <tr>
                    <th className="th">Bill.No</th>
                    <th className="th" style={{ width: "20%" }}>
                      Item Name
                    </th>
                    <th className="th">Item Code</th>
                    <th className="th">Price</th>
                    <th className="th">Qt.</th>
                    <th className="th">Dis%</th>
                    <th className="th">GST%</th>
                    <th className="th">Total</th>
                    <th className="th" style={{ width: "17%" }}>
                      Issue-Date
                    </th>
                    <th style={{ width: "9%" }}>Button</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="tbl-content">
              <table className="tbl">
                <tbody>
                  {bills.map((ele) => {
                    return (
                      <tr key={ele._id}>
                        <td className="td">5641</td>
                        <td className="td" style={{ width: "20%" }}>
                          {ele.itemname}
                        </td>
                        <td className="td">{ele.itemcode}</td>
                        <td className="td">${ele.price}</td>
                        <td className="td">{ele.quantity}</td>
                        <td className="td">{ele.discount}</td>
                        <td className="td">{ele.gstnum}</td>
                        <td className="td">$1000</td>
                        <td className="td" style={{ width: "17%" }}>
                          02-02-2022
                        </td>
                        <td style={{ width: "9%" }}>
                          <button
                            style={{ border: "0.5px solid black" }}
                            onClick={() => {
                              setProfile(ele);
                            }}
                          >
                            Button
                          </button>
                          {/* <button onClick={getpdf(ele)}>pdf</button> */}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Billinfo;
