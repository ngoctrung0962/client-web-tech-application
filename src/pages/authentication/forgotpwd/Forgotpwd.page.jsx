import { useNavigate } from 'react-router-dom'
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login } from '../../../redux/apiCalls';
import { showNotification } from '../../../utils/MyUtils'
function Forgot() {
    //const errorlogin = useSelector(state => state.user.error)
    const nav = useNavigate();
    const [accountName, setAccountName] = useState("");
    const [otp, setOtp] = useState("");
    const [serverOtp, setServerOtp] = useState("");
    const [toggleOtpInput, setToggleOtpInput] = useState(false);

    //const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(otp);
        //console.log(email);

        //get otp from server


        //check otp 
        if (serverOtp === otp) {
            nav('/reset',
                {
                    state: {
                        user: {
                            username: "nam",
                            name: "Thành Nam",
                            email: "thanhnam.thai01@gmail.com",
                            phoneNumber: "0981771024",
                            dateOfBirth: "2001-11-28",
                            address: "Bến Tre",
                            gender: true,
                            role: 0
                        }
                    }
                });
        }
        else {
            showNotification('error', 'INCORRECT', 'Your otp is not correct', 'OK');
        }
    };

    const showOtpInput = () => {
        return (
            <div className="form-wrapper">
                <input
                    type="number"
                    placeholder="OTP"
                    className="form-control"
                    required
                    onChange={(e) => setOtp(e.target.value)}
                />
                <i className="zmdi zmdi-lock" />
            </div>
        )

    }

    const checkAccountNameValid = (e) => {
        e.preventDefault();
        if (accountName)
            setToggleOtpInput(true);
    }

    const requestOtp = (e) => {
        e.preventDefault();
        setServerOtp('1234')
    }

    return (
        <div
            className="wrapper"
            style={{ backgroundImage: 'url("img/signup/bg-tech.jpg")' }}
        >
            <div className="inner">
                <div className="image-holder">
                    <img src="img/signup/ip13.jpg" />
                </div>
                <form onSubmit={handleClick} >
                    <h3>FORGOT PASSWORD</h3>

                    <div className="form-wrapper">
                        <span>Please type your account name is registered</span>
                        <span />
                        <input
                            type="text"
                            placeholder="Username"
                            className="form-control"
                            required
                            onChange={(e) => setAccountName(e.target.value)}
                        />
                        <i className="zmdi zmdi-account" />

                    </div>

                    {accountName ? showOtpInput() : ''}

                    {/* {error ? <h5 style={{ color: "red" }}>Username or password do not match</h5> : ""} */}
                    <div className="d-flex row">
                        <button onClick={(e) => requestOtp(e)} className="btn-back">
                            <i className="zmdi zmdi" />
                            GET OTP
                        </button>
                        <button type='submit' className="btn-Register" disabled={!otp}>
                            RESET
                            <i className="zmdi zmdi" />
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Forgot;