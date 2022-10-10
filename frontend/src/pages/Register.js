import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/slices/userSlice';
import Couverture from "../components/Couverture"
import "../style/register.css"
import { useNavigate } from 'react-router-dom';

const Register = ({ ping, setPing }) => {
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const dispatch = useDispatch();
    return (
        <div>
            <Couverture title='Register' />
            <div className='register_container'>
                <div className="register_container_img">
                    <img src="/assets/login.jpg" alt="" />
                </div>
                <div className="register_container_contact">
                    <h3>Register</h3>
                    <form onSubmit={(e) => e.preventDefault}>
                        <input type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setRegister({ ...register, first_name: e.target.value })} />
                        <input type="text"
                            placeholder="Enter your lastname"
                            onChange={(e) => setRegister({ ...register, last_name: e.target.value })} />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setRegister({ ...register, email: e.target.value })} />
                        <input
                            type="password"
                            placeholder="from 8 to 16 character"
                            onChange={(e) => setRegister({ ...register, password: e.target.value })} />
                        <button className="submit"
                            onClick={() => {
                                dispatch(userRegister(register)); setPing(!ping);
                                setTimeout(() => {
                                    navigate("/profile");
                                }, 15000);
                            }}>Register </button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Register