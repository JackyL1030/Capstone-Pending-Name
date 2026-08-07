import { useEffect, useState } from "react";

import { getEmployees } from "../services/userService";
import { getMe } from "../services/authService";
import { createShift } from "../services/shiftService";

import useAuth from "../context/useAuth";

export default function ShiftForm() {
  const { token } = useAuth();

  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");

  const [formData, setFormData] = useState({
    employee: "",
    date: "",
    startTime: "",
    endTime: "",
    notes: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeesData = await getEmployees(token);
        setEmployees(employeesData);

        const userData = await getMe(token);
        setDepartment(userData.department._id);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [token]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const shiftData = {
        employee: formData.employee,
        department,
        startTime: new Date(`${formData.date}T${formData.startTime}`),
        endTime: new Date(`${formData.date}T${formData.endTime}`),
        notes: formData.notes,
      };

      await createShift(shiftData, token);

      alert("Shift created successfully");

      setFormData({
        employee: "",
        date: "",
        startTime: "",
        endTime: "",
        notes: "",
      });
    } catch (error) {
      console.log(error.message);
      alert("Failed to create shift");
    }
  };

  return (
    <div className="shift-form">
      <h2>Create Shift</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employee">Employee</label>

          <select
            id="employee"
            value={formData.employee}
            onChange={handleChange}
          >
            <option value="">Select employee</option>

            {employees.map((employee) => (
              <option key={employee._id} value={employee._id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>

          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="startTime">Start Time</label>

          <input
            type="time"
            id="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endTime">End Time</label>

          <input
            type="time"
            id="endTime"
            value={formData.endTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes</label>

          <input
            type="text"
            id="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Optional notes"
          />
        </div>

        <button className="primary-btn" type="submit">
          Create Shift
        </button>
      </form>
    </div>
  );
}
