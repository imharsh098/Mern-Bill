import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="ul">
        <div>
          <h2>Follow Us On</h2>
        </div>
        <ul>
          <li>
            <img
              src="images/fb.png"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </li>
          <li>
            <img
              src="images/ytube.png"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </li>
          <li>
            <img
              src="images/twitter.png"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </li>
          <li>
            <img
              src="images/insta.png"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </li>
          <li>
            <img
              src="images/ldin.png"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </li>
        </ul>
        <h1>BillBook</h1>
        <p>Copyright-2022 @Harsh Goyal</p>
        <div className="last">
          <span>Legal Stuff</span>
          <span>Privacy Policy</span>
          <span>Security</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
