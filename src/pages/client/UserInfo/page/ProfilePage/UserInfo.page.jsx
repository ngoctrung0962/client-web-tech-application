import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Profile/Sidebar';
import { History } from '../../components/Profile/History';
import { DetailAccount } from '../../components/Profile/DetailAccount';
import { UpdateProfile } from '../../components/Profile/UpdateProfile';
import { UpdatePassword } from '../../components/Profile/UpdatePassword';


import './reset.scss'
import './style.scss'
import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import userApi from '../../../../../api/userApi';

function UserInfoPage() {
    const user = useSelector((state) => state.user.currentUser)

    const [loading, setLoading] = useState(true)
    const [userdetail, setUserdetail] = useState({})
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await userApi.get(`${user.username}`);
            setUserdetail(res)
            window.scrollTo(0, 0)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {

        fetchData();
    }, [user.username])

    return (
        <div className='profilepage'>
            <div className='profilepage__container'>
                <div className='profilepage__container--sidebar'>
                    <Sidebar />
                </div>
                <div className='profilepage__container--content'>
                    <Routes>
                        <Route path='detail' element={<DetailAccount userdetail={userdetail ? userdetail : null} />} />

                        <Route path='history' element={<History />} />
                        <Route path='updateaccount' element={<UpdateProfile />} />
                        <Route path='updatepassword' element={<UpdatePassword />} />

                    </Routes>

                </div>
            </div>
        </div>
    );
}

export default UserInfoPage;