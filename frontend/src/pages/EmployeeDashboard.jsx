import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import SwapRequestForm from "../components/SwapRequestForm";
import { getShifts } from "../services/shiftService";
import { getEmployees } from "../services/userService";
import useAuth from "../context/useAuth";

export default function EmployeeDashboard() {
  const { token } = useAuth();
  const [shifts, setShifts] = useState([]);
  const [employees, setEmployees] = useState([]);

  // fetch employee shifts
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

  // fetch employees for swap requests
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees(token);
        setEmployees(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchEmployees();
  }, [token]);

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
