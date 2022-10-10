import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../redux/slices/userSlice'

const DashbUserCard = ({ user, ping, setPing }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const options = [
        { value: "false", text: "false" },
        { value: "true", text: "true" }

    ];
    const [update, setUpdate] = useState(options[0].value);
    // const handleUpdate=(e) =>
    // setUpdate({
    //     ...update,
    //     [e.target.name]:e.target.value
    // })
    const handleChange = (event) =>
        setUpdate({ ...update, isAdmin: event.target.value });

    // const [newAdmin, setNewAdmin] = useState({})
    // const handleNewAdmin = (e) =>
    //     setNewAdmin({
    //         ...newAdmin,
    //         [e.target.name]: e.target.value,
    //     })
    return (
        <div className='user_card_content'>
            <div className='user_name display'>
                <img src={`${user?.profile_img}`} alt="user_dashboard" />
                <h4 >{`${user?.first_name} ${user?.last_name}`}</h4>
            </div>
            <div className='user_info display'>
                <p>{user?.email}</p>
                <p> {user?.phone_number} </p>
                <p>isAdmin: {user?.isAdmin.toString()}</p>
                <div className='btns'>
                    <button id='editUser_btn'
                        onClick={() => setShow(!show)}>
                        <svg strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="#FFFFFF" height="21" width="21" viewBox="0 0 24 21">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                    </button>
                    <button className='delete_btn' onClick={() => { dispatch(deleteUser({ id: user?._id, deleteUser })); setPing(!ping) }}>x</button>
                </div>
            </div>
            <div className='edit_admin'>
                {(show) &&
                    <div className='update_admin'>
                        <select name='isAdmin' value={update.isAdmin}
                            onChange={handleChange}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>
                        <button id='user_edit' onClick={() => { dispatch(updateUser({ id: user?._id, user: update })); setPing(!ping); setShow(!show) }}>Done</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default DashbUserCard