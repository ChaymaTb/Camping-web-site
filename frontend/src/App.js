
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';
import PrivateRoute from './routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { allUsers, userCurrent } from './redux/slices/userSlice';
import { useEffect, useState } from 'react';
import Activities from './pages/Activities';
import Blog from './pages/Blog';
import Contactus from './pages/Contactus';
import Description from './components/Description';
import UserBlogs from './components/UserBlogs'
import UserAbout from './components/UserAbout';
import { getBlog } from './redux/slices/blogSlice';
import Dashboard from './components/Dashboard';
import DashboardPrivateRoute from './routes/DashboardPrivateRoute';
import UserDashboard from './pages/UserDashboard'
import ActivitiesDashb from './pages/ActivitiesDashb';
import DashboardBlog from './components/DashboardBlog'
import Map from './components/Map';
import { getActivity } from './redux/slices/activitySlice';


function App() {
  const location = useLocation()

  const isAuth = localStorage.getItem("token")
  const dispatch = useDispatch();
  const [ping, setPing] = useState(false);

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
      dispatch(allUsers());
    dispatch(getActivity())

    }
    dispatch(getBlog());
  }, [dispatch, isAuth, ping]);

  return (
    <div className="App">
      {location.pathname.includes("/dashboard") ? null : <NavBar />}
      <Routes>
        <Route path='/login' element={<Login ping={ping} setPing={setPing} />} />
        <Route path='/register' element={<Register ping={ping} setPing={setPing} />} />
        <Route path='/' element={<Home />} />
        {/* Login Private Route */}
        <Route element={<PrivateRoute />}>
          <Route
            path="/profile"
            element={<Profile ping={ping} setPing={setPing} />}
          >
            <Route path='userblog' element={<UserBlogs ping={ping} setPing={setPing} />} />
            <Route path='userabout' element={<UserAbout ping={ping} setPing={setPing} />} />
          </Route>
        </Route>
        <Route path="/map" element={<Map />} />

        <Route path="/activities" element={<Activities/>} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/contactus' element={<Contactus />} />

        {/* Dashboard Private Route */}
        <Route element={<DashboardPrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard ping={ping} setPing={setPing}/>} >
            <Route path='userdashboard' element={<UserDashboard ping={ping} setPing={setPing}/>} />
            <Route path='activitiesdashb' element={<ActivitiesDashb ping={ping} setPing={setPing}/>} />
            <Route path='blogdashboard' element={<DashboardBlog ping={ping} setPing={setPing}/>} />
          </Route>
        </Route>

      </Routes>
      {location.pathname.includes("/dashboard") ? null : <Footer />}
    </div>
  );
}

export default App;
