import { useSelector } from "react-redux";
import Couverture from "../components/Couverture"
import '../style/profile.css'
import { Link, Outlet } from 'react-router-dom'

const Profile = ({ ping, setPing }) => {
    const user = useSelector((state) => state.user?.user);

    return (
        <div>
            <Couverture title="Profile" />
            <div>
                <div className="profile">
                    <div className="profile_user">
                        <img src="/assets/user_img.png" alt="profile_pict" />
                        <h1>{`${user?.first_name} ${user?.last_name}`}</h1>
                    </div>
                    <div className="profile_info">
                        <div className="profile_info_nav">
                            <Link to='/profile/userblog'><h2> Blogs</h2></Link>
                            <Link to='/profile/userabout'><h2> About</h2></Link>
                        </div>
                        <div className="empty_div"></div>
                        <div>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile;