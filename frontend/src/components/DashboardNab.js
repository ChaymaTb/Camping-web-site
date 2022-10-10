import '../style/dashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userSlice';

const DashboardNab = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <div className="dashboardNab">
            <h1>Dashboard</h1>
            <nav className='dashboardNab_nav'>
                <li className='li_color'><Link to='/'>Home</Link></li>
                <li className='li_color'><Link to='/dashboard/userdashboard'>Users</Link></li>
                <li className='li_color'><Link to='/dashboard/activitiesdashb'>Activities</Link></li>
                <li className='li_color'><Link to='/dashboard/blogdashboard'>Blogs</Link></li>
                <li className='li_color'><Link to="/profile/userblog">Profile</Link></li>
                <li className='li_color'
                    onClick={() => { dispatch(logout()); navigate("/login"); }}
                ><Link>Log out</Link></li>
            </nav>
        </div>
    )
}

export default DashboardNab;