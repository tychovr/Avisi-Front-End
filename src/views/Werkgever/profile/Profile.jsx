import React from "react";
import Navbar from "../Components/navbar/Navbar";
import "./profile.scss";
import profilepic from "../images/profilepic.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profile-container">
        <div className="top-container">
          <div className="img-container">
            <img src={profilepic} alt="" />
          </div>
          <div className="top-info">
            <h1>John Doe</h1>
            <p>johndoe@gmail.com - Starbucks CEO</p>
            <div className="image-upload">
              <p>Drop your file here or </p>
              <p className="upload-bold">click in this area</p>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-table">
            <table>
              <tr>
                <th className="t-h" scope="col">
                  Account
                </th>
              </tr>
              <tr>
                <th scope="col">Username</th>
                <td>JohnDoe</td>
              </tr>
              <tr>
                <th scope="col">Email</th>
                <td>johndoe@gmail</td>
              </tr>
              <tr>
                <th scope="col">Full name</th>
                <td>John Doe</td>
              </tr>
              <tr>
                <th scope="col">Title</th>
                <td>Starbucks CEO</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="bottom-about">
          <p className="card-title">About</p>
        </div>
        <div className="bottom-card">
          <p className="card-title">Placeholder</p>
        </div>
      </div>
      {/* <Navbar />
      <div className="profile-container">
        <div className="left-container">
          <div className="img-container">
            <img src={profilepic} alt="" />
          </div>
          <div className="profile-left">
            <h3>Account</h3>
            <p className="profile-left-info">Username</p>
            <p className="profile-left-info">Email</p>
            <p className="profile-left-info">Full name</p>
            <p>Title</p>
          </div>
        </div>
        <div className="right-container">
          <div className="profile-right">
            <h1>John Doe</h1>
            <h3>johndoe@gmail.com</h3>
            <p> - Title</p>
          </div>
          <div className="profile-right-info">
            <p>John Doe</p>
            <p>johndoe@gmail</p>
            <p>John Doe</p>
            <p>Title</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
