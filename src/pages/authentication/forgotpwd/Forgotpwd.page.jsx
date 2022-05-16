import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import LoadingOverlay from 'react-loading-overlay-ts';
import Preloder from '../../../components/proloder/Preloder.component'
import {showNotification} from '../../../utils/MyUtils';
import { useDispatch, useSelector } from "react-redux";
import { login, loginFailure } from '../../../redux/userRedux';
import userApi from '../../../api/userApi';
import styled from "styled-components";



function ForgotPassWord() {
    const StyledLink = styled(Link)`
  color: #7B68EE;
  text-decoration: underline;
`;
    //const errorlogin = useSelector(state => state.user.error)
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const [isSending, setIsSending] = useState(false);

    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = async (e) => {
        e.preventDefault();
        //console.log(formData.getAll())
        try {
            const res = await userApi.forgotPassword(username, email);
            if(res){
                showNotification('success', 'Great', 'We sent you mail to reset your password', 'OK');
            }
        } catch (error) {
            dispatch(loginFailure())
        }
    };

    return (
        <Fragment>

            <div
                className="wrapper"
                style={{ backgroundImage: 'url("img/signup/bg-tech.jpg")' }}
            >
                <div className="inner">

                    <div className="image-holder">
                        
                        <img src="img/signup/ip13.jpg" >
                        </img>
                    </div>
                    <form onSubmit={handleClick}>
                        <h3>Forgot password</h3>

                        <div className="form-wrapper">
                            <input
                                type="text"
                                placeholder="Username"
                                className="form-control"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <i className="zmdi zmdi-account" />
                        </div>

                        <div className="form-wrapper">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="zmdi zmdi-lock" />
                        </div>
                        <div className="d-flex row">
                            <button onClick={() => nav(-1)} className="btn-back">
                                <i className="zmdi zmdi-arrow-left" />
                                Back
                            </button>
                            <button
                                type="submit"
                                disabled={isFetching}
                                className="btn-Register"
                            >
                                Send
                                <i className="zmdi zmdi-arrow-right" />
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </Fragment>

    );
}

export default ForgotPassWord;
