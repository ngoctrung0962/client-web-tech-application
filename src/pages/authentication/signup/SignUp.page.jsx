import { useState } from "react";
import { useNavigate } from "react-router-dom"
function SignUp() {
  const initValue = { firstname: "", lastname: "", username: "", email: "", phonenumber: "", address: "", gender: "male", password: "", confirmpassword: "" }
  const [formvalues, setFormvalues] = useState(initValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  }
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formvalues)
  };

  return (
    <div
      className="wrapper"
      style={{ backgroundImage: 'url("img/signup/bg-tech.jpg")' }}
    >
      <div className="inner">
        <div className="image-holder">
          <img src="img/signup/ip13.jpg" alt="Image Sign Up" />
        </div>
        <form onSubmit={handleSubmit} >
          <h3>Registration Form</h3>
          <div className="form-group">
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="First Name"
              className="form-control"
              value={formvalues.firstname}
              onChange={handleChange}
              required
            />
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Last Name"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="form-control"
              onChange={handleChange}
              required
            />
            <i className="zmdi zmdi-account" />
          </div>
          <div className="form-wrapper">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="form-control"
              onChange={handleChange}
              required
            />
            <i className="zmdi zmdi-email" />
          </div>
          <div className="form-wrapper">
            <input
              id="phonenumber"
              name="phonenumber"
              type="text"
              placeholder="Phone Number"
              className="form-control"
              onChange={handleChange}
              required
            />
            <i className="zmdi zmdi-phone" />
          </div>
          <div className="form-wrapper">
            <input id="address" name="address" onChange={handleChange} type="text" placeholder="Address" className="form-control" />
            <i className="zmdi zmdi-pin" />
          </div>
          <div className="form-wrapper">
            <select value="male" onChange={handleChange} name="gender" id="gender" className="form-control" >
              <option disabled>Gender</option>
              <option value="male" >Male</option>
              <option value="femal">Female</option>
              <option value="other">Other</option>
            </select>
            <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
          </div>
          <div className="form-wrapper">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={handleChange}
              required
            />
            <i className="zmdi zmdi-lock" />
          </div>
          <div className="form-wrapper">
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              onChange={handleChange}
              required
            />
            <i className="zmdi zmdi-lock" />
          </div>
          <div className="d-flex row">
            <button onClick={() => { nav(-1) }} className="btn-back">
              <i className="zmdi zmdi-arrow-left" />
              Back
            </button>
            <button type="submit" className="btn-Register">
              Register
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
