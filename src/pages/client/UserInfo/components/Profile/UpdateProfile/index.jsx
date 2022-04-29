import React from 'react';
import './style.scss'

export const  UpdateProfile=()=> {

    return (
        <div className='updateprofile'>
            <div className='updateprofile__container'>
                <div className='updateprofile__title'>
                    <p className='updateprofile__title--p'>CHỈNH SỬA THÔNG TIN CÁ NHÂN </p>
                </div>       
                <form className='updateprofile__form'>
                    <div className='updateprofile__form--item'>
                        <div className='updateprofile__form--title'>
                            <p>Họ và tên</p>
                        </div>
                        <div className='updateprofile__form--input'>
                            <input></input>
                        </div>
                    </div>
                    <div className='updateprofile__form--item'>
                        <div className='updateprofile__form--title'>
                            <p>Số điện thoại</p>
                        </div>
                        <div className='updateprofile__form--input'>
                            <input ></input>
                        </div>
                    </div>
                    <div className='updateprofile__form--date'>
                        <div className='updateprofile__form--title'>
                            <span>Ngày tháng năm sinh:</span>
                        </div>
                        <div className='updateprofile__form--date-dropdown'>
                            <input type="date" name="namsinh"/>
                        </div>
                    </div>
                    <div className='updateprofile__form--sex'>
                        <div className='updateprofile__form--title'>
                            <span>Giới tính:</span>
                        </div>
                        <div className='updateprofile__form--sex-dropdown'>
                            <select id="sex" name="sex">
                                <option value="Nam">Nam</option>
                                <option value="Nu">Nữ</option>
                                <option value="Khac">Khác</option>
                            </select>
                        </div>
                    </div>
                    <div className='updateprofile__form--item'>
                        <div className='updateprofile__form--title'>
                            <p>Email</p>
                        </div>
                        <div className='updateprofile__form--input'>
                            <input ></input>
                        </div>
                    </div>
                    <div className='updateprofile__form--item'>
                        <div className='updateprofile__form--title'>
                            <p>Địa chỉ</p>
                        </div>
                        <div className='updateprofile__form--input'>
                            <input ></input>
                        </div>
                    </div>
                    <button className='updateprofile__form--button'>
                        <span>Cập nhật</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

