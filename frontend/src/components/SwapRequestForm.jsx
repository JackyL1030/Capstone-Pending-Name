import { useState } from "react";
import { createSwapRequest } from "../services/swapService";
import useAuth from "../context/useAuth";

export default function SwapRequestForm({ shiftId, employees }) {
  const { token } = useAuth();

  const [requestedWith, setRequestedWith] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createSwapRequest(
        {
          shift: shiftId,
          requestedWith,
        },
        token,
      );
      alert("Swap request sent!");

      setRequestedWith("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Request Shift Swap</h3>

      <select
        value={requestedWith}
        onChange={(e) => setRequestedWith(e.target.value)}
      >
        <option value="">Select employee</option>

        {employees.map((employee) => (
          <option key={employee._id} value={employee._id}>
            {employee.name}
          </option>
        ))}
      </select>
      <button type="submit">Request Swap</button>
    </form>
  );
}
