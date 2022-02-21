import React, { useState } from "react";
import axios from "axios";
import "../css/account.css";

function Account() {
  const [fheight, setFheight] = useState({ height: "300px" });
  const [reg, setReg] = useState({
    client: "",
    company: "",
    address: "",
    phone: "",
    gst: "",
    email: "",
    password: "",
  });
  const [log, setLog] = useState({
    email: "",
    password: "",
  });

  const [bar, setBar] = useState(false);
  const [style, setStyle] = useState({});
  const strong = {
    backgroundColor: "green",
    width: "100%",
  };
  const [access, setAccess] = useState(true);
  const register = () => {
    setAccess(false);
    setFheight({ height: "525px" });
  };
  const login = () => {
    setAccess(true);
    setFheight({ height: "300px" });
  };

  const registration = (e) => {
    if (e.target.id == "password") {
      setReg({ ...reg, [e.target.id]: e.target.value });
      passwordStrength(e.target.value);
    } else {
      setReg({ ...reg, [e.target.id]: e.target.value });
    }
  };
  const loggingIn = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/users/login", log);
    console.log(res.data);
  };
  function passwordStrength(val) {
    if (val.length >= 6) {
      setBar(true);
      setStyle(strong);
    } else {
      setBar(false);
    }
  }

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="images/image1.png" alt="Logo" width="100%" />
          </div>
          <div className="col-2">
            <div className="form-container" style={fheight}>
              <div className="form-btn">
                <a>
                  <span onClick={login}>Login</span>
                </a>
                <a>
                  <span onClick={register}>Register</span>
                </a>
                <hr
                  id="Indicator"
                  style={
                    access
                      ? { transform: "translateX(-50px)" }
                      : { transform: "translateX(50px)" }
                  }
                />
              </div>
              {/* {error && <h4 style={{ color: "red" }}>{error}</h4>} */}

              <form
                className="mainform"
                id="LoginForm"
                style={
                  access
                    ? { transform: "translateX(300px)" }
                    : { transform: "translateX(0px)" }
                }
                onChange={loggingIn}
                onSubmit={handleLogin}
              >
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={log.email}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={log.password}
                />
                <button type="submit" className="butn">
                  Login
                </button>
                <a href="">Forget Password</a>
              </form>

              <form
                className="mainform"
                id="RegForm"
                style={
                  access
                    ? { transform: "translateX(300px)" }
                    : { transform: "translateX(0px)" }
                }
                onChange={registration}
              >
                <input
                  type="text"
                  placeholder="Clientname"
                  id="client"
                  value={reg.client}
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  id="company"
                  value={reg.company}
                />
                <input
                  type="number"
                  placeholder="GST No."
                  id="gstno"
                  value={reg.gst}
                />
                <input
                  type="number"
                  placeholder="Phone No."
                  id="phone"
                  value={reg.phone}
                />
                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  value={reg.address}
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={reg.email}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={reg.password}
                  onChange={(e) => {
                    if (e.target.value.length >= 6) {
                      setBar(true);
                    } else {
                      setBar(false);
                    }
                  }}
                />
                {bar && (
                  <div
                    id="bar"
                    style={{
                      border: "1.5px solid gray",
                      borderRadius: "5px",
                      height: "10px",
                    }}
                  >
                    <div
                      id="status"
                      style={{
                        transition: "all ease-in-out 450ms",
                        height: "100%",
                        borderRadius: "12px",
                        ...style,
                      }}
                    ></div>
                  </div>
                )}
                {/* {bar && <PasswordStrengthBar password={reg.password} />} */}
                <button type="submit" className="butn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
