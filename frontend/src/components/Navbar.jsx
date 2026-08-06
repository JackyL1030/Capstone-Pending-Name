import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // logs out the user and redirects them to the login page
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav>
      <h1>Flexora</h1>
      <div>
        <span>
          {user?.name} ({user?.role})
        </span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
