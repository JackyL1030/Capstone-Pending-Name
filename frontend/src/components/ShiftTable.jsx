import { useEffect, useState } from "react";
import { getShifts } from "../services/shiftService";
import useAuth from "../context/useAuth";

export default function ShiftTable() {
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

  return (
    <div className="shift-table">
      <h2>Today's Shifts</h2>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {shifts.map((shift) => (
            <tr key={shift._id}>
              <td>{shift.employee.name}</td>
              <td>{new Date(shift.startTime).toLocaleDateString()}</td>
              <td>{new Date(shift.startTime).toLocaleTimeString()}</td>
              <td>{new Date(shift.endTime).toLocaleTimeString()}</td>
              <td className={`status ${shift.status}`}>{shift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
