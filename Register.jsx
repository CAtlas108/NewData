import React from "react";
import * as userServiceForm from "../services/userServiceForm";

class NewComponent extends React.Component {
  componentDidMount() {
    console.log("Mounted");
  }
  onButtonClicked = () => {
    const data = {
      email: "mr.atlas95@yicloud.com",
      password: "Catlas37570790!",
      tenantId: "U027PNWT1ST",
    };
    userServiceForm
      .logIn(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);

    console.log(" Hello");
  };
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      avatarUrl: "",
      // checkBox: false,
    },
  };
  handleChange = (e) => {
    const firstName = e.target.firstName;
    const lastName = e.target.lastName;
    const email = e.target.email;
    const password = e.target.password;
    const confirmPassword = e.target.confirmPassword;
    const avatarUrl = e.target.avatarUrl;
    // const checkBox = e.target.checkBox;
    const value = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        formData: {
          [firstName]: value,
          [lastName]: value,
          [email]: value,
          [password]: value,
          [confirmPassword]: value,
          [avatarUrl]: value,
          // [checkBox]: checkBox,
        },
      };
    });
  };
  // handleCheckBox = () => {
  //   this.setState({ checkBox: !this.state.checkBox });
  // };
  handleSubmit = () => {
    const data = {
      firstName: "John",
      lastName: "Doe",
      email: "JohnD@tayco.com",
      password: "Jod1234!",
      passwordConfirm: "Jod1234!",
      avatarUrl: "https://randomuser.me/api/portraits/men/34.jpg",
      tenantId: "U027PNWT1ST",
    };
    userServiceForm
      .register(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
    console.log(this.state.formData);
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="firstName" className="form-label">
              <strong> First Name </strong>
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.formData.firstName}
              onChange={this.handleChange}
            />
            <label for="lastName" className="form-label">
              <strong> Last Name </strong>
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.formData.lastName}
              onChange={this.handleChange}
            />
            <label for="exampleInputEmail1" className="form-label">
              <strong> Email address </strong>
            </label>
            <input
              type="email"
              className="form-control"
              value={this.state.formData.email}
              onChange={this.handleChange}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              <strong> Password </strong>
            </label>
            <input
              type="password"
              className="form-control"
              value={this.state.formData.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="confirmPassword" className="form-label">
              <strong> Confirm Password </strong>
            </label>
            <input
              type="password"
              className="form-control"
              value={this.state.formData.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <label for="avatarUrl" className="form-label">
            <strong> Avatar Url </strong>
          </label>
          <input
            type="text"
            className="form-control"
            value={this.state.formData.avatarUrl}
            onChange={this.handleChange}
          />
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={this.handleCheckBox}
            />
            <label className="form-check-label" for="exampleCheck1">
              <strong>
                I agree to the <span style={{ color: "blue" }}> terms </span>{" "}
              </strong>
            </label>
          </div>
          <button type="button" onClick={this.handleSubmit}>
            {" "}
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default NewComponent;
