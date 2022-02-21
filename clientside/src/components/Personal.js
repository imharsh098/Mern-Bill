import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Personal() {
  const [person, setPerson] = useState({});
  const userLogin = useSelector((state) => state.userLogin);
  const history = useNavigate();
  const userInfo = userLogin[userInfo];
  useEffect(() => {
    if (!userInfo) {
      history("/login");
    }
    if (userInfo) {
      setPerson(userInfo);
    }
  }, []);

  return (
    <div className="card">
      <div className="ds-top"></div>
      <div className="avatar-holder">
        <img
          className="img"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
          alt="Name "
        />
      </div>
      <div className="name">
        <a href="#" target="_blank">
          {person.clientname}
        </a>
        <h4 title="Followers">
          <span className="followers">GST PIN</span>
        </h4>
      </div>
      <div className="button">
        <a href="#" className="btn">
          {person.gst}
        </a>
      </div>
      <div className="ds-info">
        <div className="ds pens">
          <h6 title="Number of pens created by the user">
            Orders <i className="fas fa-edit"></i>
          </h6>
          <p>-</p>
        </div>
        <div className="ds projects">
          <h6 title="Number of projects created by the user">
            Total Revenue <i className="fas fa-project-diagram"></i>
          </h6>

          <p>-</p>
        </div>
        <div className="ds posts">
          <h6 title="Number of posts">
            Amount Due <i className="fas fa-comments"></i>
          </h6>
          <p>-</p>
        </div>
      </div>
      <div className="details">
        <div className="contact">
          <h1> Contact:-</h1>

          <div className="condetail">
            <h3> Company Name:- {person.companyname}</h3>

            <h3>Address:- {person.address}</h3>
            <h3> Email:- {person.email}</h3>
            <h3> Phone:- {person.phone}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
