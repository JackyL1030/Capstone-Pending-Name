import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import "../styles/Navbar.css"

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // logs out the user and redirects them to the login page
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <h1 className="logo">Flexora</h1>
      <div className="navbar-right"> 
        <span className="user-info">
          {user?.name} ({user?.role})
        </span>
        <button className="logout-btn" onClick={handleLogout} >Logout</button>
      </div>
    </nav>
  );
}
