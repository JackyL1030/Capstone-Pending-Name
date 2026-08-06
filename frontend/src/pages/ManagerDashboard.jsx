import useAuth from "../context/useAuth";
import Navbar from "../components/Navbar";

export default function ManagerDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <h1>Manager Dashboard</h1>
    </div>
  );
}
