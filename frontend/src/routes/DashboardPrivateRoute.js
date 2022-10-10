import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const DashboardPrivateRoute = () => {
    const user=useSelector(state=>state.user?.user)
    const isAuth = localStorage.getItem("token");
    return (isAuth && user?.isAdmin) ? <Outlet /> : <Navigate to="/" />;
}

export default DashboardPrivateRoute