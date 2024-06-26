import React, { Component } from "react";
import "../components/UserProfile.css";

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <div className="p-5 bg-light vh-100">
        <h1 className="text-center mb-5">Use Profile</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input type="text" name="firstname" required />
                <span className="hightlight" />
                <span className="bar" />
                <label>First Name</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="text" name="lastname" required />
                <span className="hightlight" />
                <span className="bar" />
                <label>Last Name</label>
              </div>
            </div>
            <div className="col-12">
              <div className="group">
                <input type="text" name="username" required />
                <span className="hightlight" />
                <span className="bar" />
                <label>User Name</label>
              </div>
            </div>
            <div className="col-12">
              <div className="group">
                <input type="email" name="email" required />
                <span className="hightlight" />
                <span className="bar" />
                <label>Email</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="text" name="password" required />
                <span className="hightlight" />
                <span className="bar" />
                <label>Password</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="text" name="passwordConfirm" required />
                <span className="hightlight" />
                <span className="bar" />
                <label>Password Confirm</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-lg text-white bg-dark w-100">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
