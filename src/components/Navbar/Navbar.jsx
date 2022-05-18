import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
      <nav className="navbar">
        <NavLink to="/" className="app-logo">
          <h1 className="logo-txt">Quizzy</h1>
        </NavLink>
        <NavLink to="/login" className="auth">
          <button className="btn">Login</button>
        </NavLink>
      </nav>
  );
};

export { Navbar };
