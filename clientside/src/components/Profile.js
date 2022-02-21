import React from "react";
import "../css/profile.css";

function Profile({ profile }) {
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
        <a>{profile.clientname}</a>
        <h4 title="Followers">
          <span className="followers">GST PIN</span>
        </h4>
      </div>
      <div className="button">
        <a className="btn">{profile.gst}</a>
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
            <h3> Company Name:- {profile.companyname}</h3>

            <h3>Address:- {profile.address}</h3>
            <h3> Email:- {profile.email}</h3>
            <h3> Phone:- {profile.phone}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
