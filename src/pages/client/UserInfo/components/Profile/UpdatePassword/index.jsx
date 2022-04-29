import React from 'react';
import './style.scss'

export const  UpdatePassword=()=> {

    return (
        <div className='updatepassword'>
            <div className='updatepassword__container'>
                <div className='updatepassword__title'>
                    <p className='updatepassword__title--p'>THAY ĐỔI MẬT KHẨU</p>
                </div>       
                <form className='updatepassword__form'>
                    <div className='updatepassword__form--item'>
                        <div className='updatepassword__form--title'>
                            <p>Tên đăng nhập</p>
                        </div>
                        <div className='updatepassword__form--input'>
                            <input></input>
                        </div>
                    </div>
                    <div className='updatepassword__form--item'>
                        <div className='updatepassword__form--title'>
                            <p>Mật khẩu cũ </p>
                        </div>
                        <div className='updatepassword__form--input'>
                            <input ></input>
                        </div>
                    </div>
                    <div className='updatepassword__form--item'>
                        <div className='updatepassword__form--title'>
                            <p>Mật khẩu mới</p>
                        </div>
                        <div className='updatepassword__form--input'>
                            <input ></input>
                        </div>
                    </div>
                    <div className='updatepassword__form--item'>
                        <div className='updatepassword__form--title'>
                            <p>Nhập lại mật khẩu mới</p>
                        </div>
                        <div className='updatepassword__form--input'>
                            <input ></input>
                        </div>
                    </div>
                    <button className='updatepassword__form--button'>
                        <span>Cập nhật</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

