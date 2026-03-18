import Navbar from "../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate();

  // Dynamic stats
  const [stats, setStats] = useState({
    apiCalls: 0,
    saved: 0,
    explored: 0,
  });

  useEffect(() => {
    // Extra logic: load saved requests count
    const savedRequests =
      JSON.parse(localStorage.getItem("savedRequests")) || [];

    setStats({
      apiCalls: Number(localStorage.getItem("apiCalls")) || 0,
      saved: savedRequests.length,
      explored: Number(localStorage.getItem("explored")) || 0,
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="p-8">
        <h2 className="text-3xl font-bold mb-2">
          Welcome to Developer API Hub
        </h2>

        <p className="text-gray-600 mb-8">
          Your all-in-one platform for testing APIs, saving requests, and
          exploring public APIs.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Playground */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">API Playground</h3>
            <p className="text-gray-600 mb-4">
              Test APIs and get instant response.
            </p>
            <button
              onClick={() => navigate("/playground")}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Open Playground →
            </button>
          </div>

          {/* Saved */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">Saved Requests</h3>
            <p className="text-gray-600 mb-4">Access saved API requests.</p>
            <button
              onClick={() => navigate("/playground")}
              className="border border-green-500 text-green-600 px-4 py-2 rounded"
            >
              View Saved →
            </button>
          </div>

          {/* Explorer */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">Public API Explorer</h3>
            <p className="text-gray-600 mb-4">Explore real-time APIs.</p>
            <button
              onClick={() => navigate("/explorer")}
              className="border border-purple-500 text-purple-600 px-4 py-2 rounded"
            >
              Explore →
            </button>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-2xl font-bold">
              {stats.apiCalls}
            </h3>
            <p>API Requests Sent</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-green-600 text-2xl font-bold">{stats.saved}</h3>
            <p>Saved Requests</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-purple-600 text-2xl font-bold">
              {stats.explored}
            </h3>
            <p>APIs Explored</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
