import React, { useState } from 'react';
import './style.scss'

export const UpdatePassword = ({ userdetail }) => {
    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const datasubmit = {
            oldpassword: oldpassword,
            newpassword: newpassword,
            confirmpassword: confirmpassword
        }
        console.log(datasubmit)
    }

    return (
        <div className='updatepassword'>
            <div className='updatepassword__container'>
                <div className='updatepassword__title'>
                    <p className='updatepassword__title--p'>THAY ĐỔI MẬT KHẨU</p>
                </div>
                <form onSubmit={handleSubmit} className='updatepassword__form'>

                    <div className='updatepassword__form--item'>
                        <div className='updatepassword__form--title'>
                            <p>Mật khẩu cũ </p>
                        </div>
                        <div className='updatepassword__form--input'>
                            <input name="oldpassword" type="password" onChange={(e) => setOldpassword(e.target.value)} ></input>
                        </div>
                    </div>
                    <div className='updatepassword__form--item'>
                        <div className='updatepassword__form--title'>
                            <p>Mật khẩu mới</p>
                        </div>
                        <div className='updatepassword__form--input'>
                            <input name="newpassword" type="password" onChange={(e) => setNewpassword(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='updatepassword__form--item'>
                        <div className='updatepassword__form--title'>
                            <p>Nhập lại mật khẩu mới</p>
                        </div>
                        <div className='updatepassword__form--input'>
                            <input name="confirmpassword" type="password" onChange={(e) => setConfirmpassword(e.target.value)}></input>
                        </div>
                    </div>
                    <button type='submit' className='updatepassword__form--button'>
                        <span>Cập nhật</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

