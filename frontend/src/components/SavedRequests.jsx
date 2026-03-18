import axios from "axios";
import { useEffect, useState } from "react";

function SavedRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/requests", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRequests(res.data);
    } catch (error) {
      console.log("Error fetching requests");
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Saved Requests</h2>
      {requests.map((req) => (
        <div key={req._id} className="border p-3 mb-2 rounded">
          <p>
            <b>Method:</b>
            {req.method}
          </p>
          <p>
            <b>URL:</b>
            {req.url}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SavedRequests