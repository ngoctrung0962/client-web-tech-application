import { useState } from "react";
import { useNavigate } from "react-router-dom"
import userApi from "../../../api/userApi";
import { showNotification } from "../../../utils/MyUtils";
function SignUp() {
  const initValue = { name: "", username: "", email: "", phoneNumber: "", dateOfBirth: "", address: "", gender: true, password: "" }
  const [formvalues, setFormvalues] = useState(initValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  }
  const [confirmpassword, setConfirmpassword] = useState("")
  const handleChangeConfirm = () => {

  }
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formvalues)
    if (formvalues.password === confirmpassword) {
      const res = await userApi.register(
        formvalues.username,
        formvalues.password,
        formvalues
      );
      console.log(res)

      if (!res.status || res.status === 200) {

        showNotification('success', 'Sign up success !', 'Please log in again', 'OK')
        nav("/signin")
      }
      else {
        showNotification('error', 'Sign up fail !', `Error: ${res.message}`, 'OK')
      }
    }
    else {
      showNotification('error', 'Sign up fail !', "Error: Confirm password doesn't match", 'OK')
    }

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
          <h3>Sign Up Form</h3>
          <div className="form-wrapper">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              className="form-control"
              value={formvalues.name}
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
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              placeholder="date of birth"
              className="form-control"
              onChange={handleChange}
              required
            />

          </div>
          <div className="form-wrapper">
            <input
              id="phoneNumber"
              name="phoneNumber"
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
            <select onChange={handleChange} name="gender" id="gender" className="form-control" >
              <option disabled>Gender</option>
              <option value={true} >Male</option>
              <option value={false}>Female</option>
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

              type="password"
              placeholder="Confirm Password"
              className="form-control"
              onChange={(e) => setConfirmpassword(e.target.value)}
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
              SIGN UP
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
