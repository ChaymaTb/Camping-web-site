import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Couverture from '../components/Couverture'
import DashbUserCard from '../components/DashbUserCard'
import FilterBlog from '../components/FilterBlog'
import '../style/userdashb.css'

const UserDashboard = ({ ping, setPing }) => {
    const blog = useSelector(state => state.blog?.blog)
    const users = useSelector(state => state.user?.users)
    const [search, setSearch] = useState('');

    return (
        <div>
            <Couverture title='all/Users' />
            <div className='user_dashboard'>
                <div className='user_card'>
                    {users?.filter((el) => {
                        if (search === '') { return el }
                        else if (el.first_name.toLowerCase().includes(search.toLowerCase()) || el.last_name.toLowerCase().includes(search.toLowerCase())) { return el }
                    }).map((user, i) =>
                        <DashbUserCard user={user} key={i} ping={ping} setPing={setPing} />
                    )}

                </div>
                <FilterBlog blog={blog} setSearch={setSearch} />
            </div>
        </div>
    )
}

export default UserDashboard