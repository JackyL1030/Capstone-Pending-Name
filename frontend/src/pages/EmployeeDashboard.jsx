import useAuth from "../context/useAuth";
import Navbar from "../components/Navbar";

export default function EmployeeDashboard() {
  const { user, token } = useAuth();

  return (
    <div>
      <Navbar />
      <h1>Employee Dashboard</h1>

      <p>User: {user?.name}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}