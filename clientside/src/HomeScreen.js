import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Billinfo from "./components/Billinfo.js";
import Footer from "./components/Footer";

function HomeScreen() {
  return (
    <div className="entire">
      <Navbar />
      <div className="addbillbtn">
        <Link to={"/newbill"}>
          <img
            src="images/adding.png"
            style={{ width: "30px", height: "30px" }}
          ></img>
        </Link>
      </div>
      <div className="bottom" style={{ display: "flex", margin: "0.1rem" }}>
        <Billinfo />
      </div>
      <div
        className="foot"
        style={{
          width: "100%",
          background: "#ffc0cb",
          color: "#9d2b2b",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default HomeScreen;
