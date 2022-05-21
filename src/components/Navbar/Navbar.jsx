import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {useAuth} from '../../context/AuthContext'
import {LogoutHandler} from "../../services/authandlers"

const Navbar = () => {
  const {user ,setUser} = useAuth()
  return (
      <nav className="navbar">
        <NavLink to="/" className="app-logo">
          <h1 className="logo-txt">Quizzy</h1>
        </NavLink>
        {!user.isUserLoggedIn?
        <NavLink to="/login" className="auth">
          <button className="btn">Login</button>
        </NavLink>:
        <div className="auth">
        <button className="btn" onClick={()=>LogoutHandler(setUser)}>Logout</button>
        </div>
        }
      </nav>
  );
};

export { Navbar };
