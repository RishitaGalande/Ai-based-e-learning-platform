import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <>
      <div className="tabs">
        <button className="tab" onClick={() => window.location.href = 'index.html'}>Home</button>
        <button className="tab" onClick={() => window.location.href = 'course.html'}>Courses</button>
        <button className="tab" onClick={() => window.location.href = 'dasboard.html'}>Dashboard</button>
        <button className="tab active" onClick={() => window.location.href = 'profile.html'}>Profile</button>
        <button className="tab">🗝️ Voice Assistant</button>
      </div>

      <div className="profile-container">
        <div className="form-section">
          <h2>USER PROFILE</h2>

          <div className="form-group">
            <label>User Name</label>
            <div className="icon-container">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Enter User Name" />
            </div>
          </div>

          <div className="form-group">
            <label>Email Id</label>
            <div className="icon-container">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Enter Email" />
            </div>
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <div className="icon-container">
              <i className="fas fa-mobile-alt"></i>
              <input type="tel" placeholder="Enter your 10 digit mobile number" />
            </div>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <div className="icon-container">
              <i className="fas fa-calendar-alt"></i>
              <input type="date" />
            </div>
          </div>

          <label>Gender</label>
          <div className="radio-group">
            <label><input type="radio" name="sex" /> Male</label>
            <label><input type="radio" name="sex" /> Female</label>
          </div>

          <button className="save-btn">SAVE</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
