import useAuth from "../context/useAuth";
import Navbar from "../components/Navbar";

export default function EmployeeDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <h1>Employee Dashboard</h1>
    </div>
  );
}
