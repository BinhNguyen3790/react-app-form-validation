import React, { Component } from "react";
import "../components/UserProfile.css";

class UserProfile extends Component {
  state = {
    values: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errors: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };
  handleChange = (e) => {
    let { name, value } = e.target;
    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = name + " is required!";
    }
    if (name === "email") {
      const resges = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!resges.test(value)) {
        newErrors[name] = name + " is invalid!";
      } else {
        newErrors[name] = "";
      }
    }
    if (name === "passwordConfirm") {
      if (value === newValues["password"]) {
        newErrors[name] = "";
      } else {
        newErrors[name] = name + " is invalid!";
      }
    }

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { values, errors } = this.state;
    let valid = true;
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("data false!");
      return;
    }
    alert("success");
  };
  render() {
    return (
      <div className="p-5 bg-light vh-100">
        <h1 className="text-center mb-5">Use Profile</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input type="text" name="firstname" required value={this.state.values.firstname} onChange={this.handleChange} />
                  <span className="hightlight" />
                  <span className="bar" />
                  <label>First Name</label>
                  <span className="text text-danger">{this.state.errors.firstname}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input type="text" name="lastname" required value={this.state.values.lastname} onChange={this.handleChange} />
                  <span className="hightlight" />
                  <span className="bar" />
                  <label>Last Name</label>
                  <span className="text text-danger">{this.state.errors.lastname}</span>
                </div>
              </div>
              <div className="col-12">
                <div className="group">
                  <input type="text" name="username" required value={this.state.values.username} onChange={this.handleChange} />
                  <span className="hightlight" />
                  <span className="bar" />
                  <label>User Name</label>
                  <span className="text text-danger">{this.state.errors.username}</span>
                </div>
              </div>
              <div className="col-12">
                <div className="group">
                  <input type="email" name="email" required value={this.state.values.email} onChange={this.handleChange} />
                  <span className="hightlight" />
                  <span className="bar" />
                  <label>Email</label>
                  <span className="text text-danger">{this.state.errors.email}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input type="password" name="password" required value={this.state.values.password} onChange={this.handleChange} />
                  <span className="hightlight" />
                  <span className="bar" />
                  <label>Password</label>
                  <span className="text text-danger">{this.state.errors.password}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input type="password" name="passwordConfirm" required value={this.state.values.passwordConfirm} onChange={this.handleChange} />
                  <span className="hightlight" />
                  <span className="bar" />
                  <label>Password Confirm</label>
                  <span className="text text-danger">{this.state.errors.passwordConfirm}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-lg text-white bg-dark w-100">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserProfile;
