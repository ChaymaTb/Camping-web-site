import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/slices/userSlice'
import '../style/userAbout.css'

const UserAbout = ({ user, ping, setPing }) => {
    const [newUser, setNewUser] = useState({
    })
    const handleUpdate = (e) =>
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    const dispatch = useDispatch()
    return (
        <div className='user_about'>
            <input type="text" placeholder='Name' name="first_name"
                defaultValue={user?.first_name} onChange={(e) => handleUpdate(e)} />

            <input type="text" placeholder='Last name' name="last_name"
                defaultValue={user?.last_name} onChange={(e) => handleUpdate(e)} />

            <input type="text" placeholder='email' name="email"
                defaultValue={user?.email} onChange={(e) => handleUpdate(e)} />

            <input type="text" placeholder='+216 xx xxx xxx' name="phone_number"
                defaultValue={user?.phone_number} onChange={(e) => handleUpdate(e)} />

            <input type="text" placeholder='Home adress' name="adress"
                defaultValue={user?.adress} onChange={(e) => handleUpdate(e)} />

            <button onClick={() => {
                dispatch(updateUser({ id: user?._id, user: newUser }))
            }} >Done </button>
        </div>
    )
}

export default UserAbout