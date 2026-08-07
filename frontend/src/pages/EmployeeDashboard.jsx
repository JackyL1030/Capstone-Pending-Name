import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import SwapRequestForm from "../components/SwapRequestForm";
import { getShifts } from "../services/shiftService";
import useAuth from "../context/useAuth";

export default function EmployeeDashboard() {
  const { token } = useAuth();
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const data = await getShifts(token);
        setShifts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchShifts();
  }, [token]);

  const employees = [
    {
      _id: "6a737276b4e93f87b0bb11c9",
      name: "Sarah",
    },
  ];

  return (
    <div className="dashboard-container">
      <Navbar />

      <h1 className="dashboard-title">Employee Dashboard</h1>
      <div className="dashboard-card">
        <h2>My Upcoming Shifts</h2>
        {shifts.length === 0 ? (
          <p>No upcoming shifts.</p>
        ) : (
          shifts.map((shift) => (
            <div className="shift-card" key={shift._id}>
              <h3>{new Date(shift.startTime).toLocaleDateString()}</h3>

              <p>
                {new Date(shift.startTime).toLocaleTimeString()}
                {" - "}
                {new Date(shift.endTime).toLocaleTimeString()}
              </p>
              <p>Department: {shift.department.name}</p>
              <p>Status: {shift.status}</p>

              <SwapRequestForm shiftId={shift._id} employees={employees} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
