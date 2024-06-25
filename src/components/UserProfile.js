import React, { Component } from "react";
import "../components/UserProfile.css";

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <div className="m-5">
        <h1 className="text-center">Use Profile</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input type="text" required />
                <span className="hightlight" />
                <span className="bar" />
                <label>Name</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="text" required />
                <span className="hightlight" />
                <span className="bar" />
                <label>Name</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
