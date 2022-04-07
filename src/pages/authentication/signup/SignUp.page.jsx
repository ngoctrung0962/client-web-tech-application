function SignUp() {
  return (
    <div
      className="wrapper"
      style={{ backgroundImage: 'url("img/signup/bg-tech.jpg")' }}
    >
      <div className="inner">
        <div className="image-holder">
          <img src="img/signup/ip13.jpg" alt="Image Sign Up" />
        </div>
        <form action>
          <h3>Registration Form</h3>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
            />
            <i className="zmdi zmdi-account" />
          </div>
          <div className="form-wrapper">
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
            />
            <i className="zmdi zmdi-email" />
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control"
            />
            <i className="zmdi zmdi-phone" />
          </div>
          <div className="form-wrapper">
            <input type="text" placeholder="Address" className="form-control" />
            <i className="zmdi zmdi-pin" />
          </div>
          <div className="form-wrapper">
            <select name id className="form-control">
              <option value disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="femal">Female</option>
              <option value="other">Other</option>
            </select>
            <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
            <i className="zmdi zmdi-lock" />
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
            />
            <i className="zmdi zmdi-lock" />
          </div>
          <div className="d-flex row">
            <button className="btn-back">
              <i className="zmdi zmdi-arrow-left" />
              Back
            </button>
            <button className="btn-Register">
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
