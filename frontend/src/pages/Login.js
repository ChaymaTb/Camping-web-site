import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/slices/userSlice";
import Couverture from "../components/Couverture"
import '../style/login.css'

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div>
      <Couverture title='Log In'/>
      <div className='login_container'>
        <div className="login_container_img">
          <img src="/assets/login.jpg" alt="" />
        </div>
        <div className="login_contact">
          <h3>SIGN IN</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email"
              placeholder="Enter your email"
              onChange={(e) => setLogin({ ...login, email: e.target.value })} />
            <input type="password"
              placeholder="********"
              onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                <button
                  
                  onClick={() => {
                    dispatch(userLogin(login));
                    setTimeout(() => {
                      navigate("/");
                    }, 1500);
                  }}
                >
                  Login
                </button>
          </form>
          {/* <h5>Sign up</h5> */}
        </div>
      </div>
    </div>
  )
}

export default Login