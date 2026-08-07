import { useEffect, useState } from "react";
import { getSwapRequests, updateSwapStatus } from "../services/swapService";
import useAuth from "../context/useAuth";

export default function SwapRequestTable() {
  const { token } = useAuth();
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const data = await getSwapRequests(token);
      setRequests(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateSwapStatus(id, status, token);

      // refresh table after update
      fetchRequests();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="swap-table">
      <h2>Pending Swap Requests</h2>

      {requests.length === 0 ? (
        <p>No swap requests found.</p>
      ) : (
        requests.map((request) => (
          <div className="swap-card" key={request._id}>
            <p>
              <strong>{request.requester.name}</strong> wants to swap with{" "}
              <strong>{request.requestedWith.name}</strong>
            </p>

            <p>Status: {request.status}</p>

            {request.status === "pending" && (
              <div>
                <button
                  onClick={() => handleStatusUpdate(request._id, "approved")}
                >
                  Approve
                </button>

                <button
                  onClick={() => handleStatusUpdate(request._id, "rejected")}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
