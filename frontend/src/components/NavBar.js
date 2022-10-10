import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/slices/userSlice'
import "../style/navbar.css"

const NavBar = () => {
  const user = useSelector(state => state.user?.user)
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src="../assets/camp-logo.png" alt="logo_camp" />
        <p>CAMPING</p>
      </div>
      <ul className='navigation'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/activities"><li>Activities</li></Link>
        <Link to="/blog"><li>Blog</li></Link>
        <Link to="/contactus"><li>Contcat us</li></Link>
      </ul>
      <div className='login'>
        <ul>
          {isAuth ? (user?.isAdmin ? <Link to='dashboard/userdashboard'><li>Dashboard</li></Link>
            : <Link to="/profile/userblog"><li>Profile</li></Link>)
            : <Link to="/register"><li>Register</li></Link>}

          <div style={{ width: '2px', height: '30px', backgroundColor: 'grey' }}></div>
          {isAuth ? <><li
            onClick={() => { dispatch(logout()); navigate("/login"); }}
            style={{ cursor: 'pointer' }} >Logout</li></>
            : <> <Link to="/login"><li>Log in</li></Link></>
          }
        </ul>
      </div>

    </div>
  )
}

export default NavBar