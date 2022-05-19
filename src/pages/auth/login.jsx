import React,{useState} from 'react'
import { useAuth } from '../../context/AuthContext';
import { Link ,useNavigate } from 'react-router-dom';
import { LogInHandler} from '../../services/authandlers';
import "./auth.css"
const Login = () => {
  const { user, setUser } = useAuth();
  const [loguser, setLoguser] = useState({ email: "", password: "" });
  const guestUser = {
    email: "admin@gmail.com",
    password: "123456",
  };
  const navigator = useNavigate();
  return (
    <div id="log-wrapper">
      <div id="form-container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            LogInHandler(loguser, setUser, navigator);
          }}
        >
          <h1 className="form-heading">LOGIN</h1>
          <input
            className="query"
            type="text"
            name="username"
            placeholder="Enter Email"
            onChange={(e) => setLoguser({ ...loguser, email: e.target.value })}
          />
          <input
            className="query"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setLoguser({ ...loguser, password: e.target.value })}
          />
          <div className="log-cred" style={{ cursor: "context-menu" }}>
              <input type="radio" />
            <span>
              Remember me
            </span>
          </div>
          <div className="log-btn">
            <button className="btn" type="submit">
              Login
            </button>
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                LogInHandler(guestUser, setUser, navigator);
              }}
            >
              Login as Guest
            </button>
          </div>
          <Link
            to="/signup"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <button className="sign-btn">No Account? Create One</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;