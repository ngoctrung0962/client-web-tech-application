import React, { useEffect, useState } from 'react';
import userApi from '../../../../../../api/userApi';
import { useSelector } from 'react-redux';
import './style.scss'
import { Navigate } from 'react-router-dom';


export const UpdateProfile = () => {
    const user = useSelector((state) => state.user.currentUser);




    const [loading, setLoading] = useState(true)
    const [userdetail, setUserdetail] = useState([])
    const initValue = { name: userdetail.name, username: userdetail.username, email: userdetail.email, phoneNumber: userdetail.phoneNumber, address: userdetail.address, dateOfBirth: userdetail.dateOfBirth, gender: userdetail.gender }
    const [formvalues, setFormvalues] = useState(initValue);
    console.log("xxx", initValue)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormvalues({ ...formvalues, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await userApi.update(userdetail.username, formvalues)
        window.alert("Cập nhật thành công")
        setFormvalues(formvalues);
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await userApi.get(`${user.username}`);
                setUserdetail(res);
                setFormvalues(res)
                window.scrollTo(0, 0)
                console.log("Ket qua", res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [user.username])
    return (
        <div className='updateprofile'>
            <div className='updateprofile__container'>
                <div className='updateprofile__title'>
                    <p className='updateprofile__title--p'>CHỈNH SỬA THÔNG TIN CÁ NHÂN </p>
                </div>
                <form onSubmit={handleSubmit} className='updateprofile__form'>
                    <div className='updateprofile__form--item'>
                        <div className='updateprofile__form--title'>
                            <p>Họ và tên</p>
                        </div>
                        <div className='updateprofile__form--input'>
                            <input
                                value={formvalues.name}

                                id="name"
                                name="name"
                                onChange={handleChange}
                            ></input>
                        </div>
                    </div>
                    <div className='updateprofile__form--item'>
                        <div className='updateprofile__form--title'>
                            <p>Số điện thoại</p>
                        </div>
                        <div className='updateprofile__form--input'>
                            <input
                                value={formvalues.phoneNumber}
                                id="phoneNumber"
                                name="phoneNumber"
                                onChange={handleChange}
                            ></input>
                        </div>
                    </div>
                    <div className='updateprofile__form--date'>
                        <div className='updateprofile__form--title'>
                            <span>Ngày tháng năm sinh:</span>
                        </div>
                        <div className='updateprofile__form--date-dropdown'>
                            <input
                                value={formvalues.dateOfBirth}
                                id="dateOfBirth"
                                name="dateOfBirth"
                                onChange={handleChange}
                                type="date"
                            />
                        </div>
                    </div>
                    <div className='updateprofile__form--sex'>
                        <div className='updateprofile__form--title'>
                            <span>Giới tính:</span>
                        </div>
                        <div className='updateprofile__form--sex-dropdown'>
                            <select value={formvalues.gender} option={formvalues.gender} onChange={handleChange} id="gender" name="gender">
                                <option value={true}>Nam</option>
                                <option value={false}>Nữ</option>
                                <option value="Khac">Khác</option>
                            </select>
                        </div>
                    </div>
                    <div className='updateprofile__form--item'>
                        <div className='updateprofile__form--title'>
                            <p>Email</p>
                        </div>
                        <div className='updateprofile__form--input'>
                            <input
                                value={formvalues.email}
                                id="email"
                                name="email"
                                onChange={handleChange}
                            ></input>
                        </div>
                    </div>
                    <div className='updateprofile__form--item'>
                        <div className='updateprofile__form--title'>
                            <p>Địa chỉ</p>
                        </div>
                        <div className='updateprofile__form--input'>
                            <input
                                value={formvalues.address}
                                id="address"
                                name="address"
                                onChange={handleChange}
                            ></input>
                        </div>
                    </div>
                    <button type='submit' className='updateprofile__form--button'>
                        <span>Cập nhật</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

