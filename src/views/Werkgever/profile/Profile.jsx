import React from "react";
import Navbar from "../Components/navbar/Navbar";
import Navigation from "../../../components/Navigation/Navigation";
import "./profile.scss";
import profilepic from "../images/profilepic.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <Navigation />
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
          <p className="about-text">
            Dummy text is text that is used in the publishing industry or by web
            designers to occupy the space which will later be filled with 'real'
            content. This is required when, for example, the final text is not
            yet available. Dummy text is also known as 'fill text'. It is said
            that song composers of the past used dummy texts as lyrics when
            writing melodies in order to have a 'ready-made' text to sing with
            the melody. Dummy texts have been in use by typesetters since the
            16th century.
          </p>
        </div>
        <div className="bottom-card">
          <p className="card-title">Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
