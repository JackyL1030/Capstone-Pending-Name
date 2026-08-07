import { useNavigate } from "react-router-dom";
import "../styles/Unauthorized.css";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-page">
      <div className="unauthorized-card">
        <h1>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
        <button className="primary-btn" onClick={() => navigate("/")}>Return Home</button>
      </div>
    </div>
  );
}
