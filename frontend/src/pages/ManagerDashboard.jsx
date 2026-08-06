import useAuth from "../context/useAuth";

export default function ManagerDashboard() {
  const { user, token } = useAuth();

  return (
    <div>
      <h1>Manager Dashboard</h1>

      <p>User: {user?.name}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}