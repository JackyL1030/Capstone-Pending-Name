import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

import ShiftForm from "../components/ShiftForm";
import ShiftCalendar from "../components/ShiftCalendar";
import ShiftTable from "../components/ShiftTable";

import SwapRequestTable from "../components/SwapRequestTable";

export default function ManagerDashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />

      <h1 className="dashboard-title">Manager Dashboard</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <ShiftForm />
        </div>

        <div className="dashboard-card">
          <ShiftCalendar />
        </div>
      </div>

      <div className="dashboard-card">
        <ShiftTable />
      </div>
      
      <div className="dashboard-card">
        <SwapRequestTable />
      </div>
    </div>
  );
}
