import useAuth from "../context/useAuth";
import Navbar from "../components/Navbar";

export default function ManagerDashboard() {
  const { user, token } = useAuth();

  return (
    <div>
      <Navbar />
      <h1>Manager Dashboard</h1>

      <p>User: {user?.name}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}