import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { login } from '../../../redux/apiCalls';
import { showNotification } from '../../../utils/MyUtils';

function Reset() {
    const location = useLocation();
    const nav = useNavigate();
    const [accountName, setAccountName] = useState("");
    const [newPass, setNewPass] = useState("");

    useEffect(() =>{
        if(location.state == undefined)
            nav('/signin')
        else{
            const ob = location.state.user;
            setAccountName(ob);
        }
        
    },[])
    
    const handleClick = (e) => {
        e.preventDefault();
        if (newPass) {
            const ob = accountName;
            
        }
        else {
            showNotification('error', 'WARNING', 'Please type a new password', 'OK');
        }
    };

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
                    <h3>RESET PASSWORD</h3>

                    <div className="form-wrapper">
                        <span>Account Name:{accountName.username}</span> 
                        <span />
                        <input
                            type="text"
                            placeholder="new password"
                            className="form-control"
                            required
                            onChange={(e) => setNewPass(e.target.value)}
                        />
                        <i className="zmdi zmdi-account" />

                    </div>

                    {/* {error ? <h5 style={{ color: "red" }}>Username or password do not match</h5> : ""} */}
                    <div className="d-flex row">
                        {/* <button onClick={(e) => requestOtp(e)} className="btn-back">
                            <i className="zmdi zmdi" />
                            GET OTP
                        </button> */}
                        <button type='submit' className="btn-Register" >
                            RESET
                            <i className="zmdi zmdi" />
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reset;