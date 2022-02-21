import "../css/navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/userActions";
import { Link } from "react-router-dom";

function Navbar() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    if (userInfo) {
      dispatch(logoutAction());
      history("/login");
    }
  };
  return (
    <div className="head">
      <div className="h1">
        <img src="/images/bill.png" className="logoImg" />
        <h1>BillBook</h1>
      </div>
      <div className="btn">
        <Link to={"/"}>
          <button className="navBtn">Home</button>
        </Link>
        <Link to={"/profile"}>
          <button className="navBtn">Profile</button>
        </Link>
        <Link to={"/login"}>
          <button className="navBtn" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
