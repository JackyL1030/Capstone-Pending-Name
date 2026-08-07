import useAuth from "../context/useAuth";

import Navbar from "../components/Navbar";
import ShiftForm from "../components/ShiftForm"
import ShiftCalendar from "../components/ShiftCalendar"
import ShiftTable from "../components/ShiftTable";

export default function ManagerDashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Manager Dashboard</h1>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <ShiftForm />
          </div>
          <div className="dashboard-card">
            <ShiftCalendar />
          </div>
          <div className="dashboard-card">
            <ShiftTable />
          </div>
        </div>
      </div>
    </>
  );
}
