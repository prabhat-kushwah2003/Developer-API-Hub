import axios from "axios";
import { useState, useEffect } from "react";

function ApiTester() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);

  // saved requests state
  const [saved, setSaved] = useState([]);

  // load saved requests from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedRequests")) || [];
    setSaved(stored);
  }, []);

  const handleRequest = async () => {
    try {
      const result = await axios({
        method: method,
        url: url,
        data: body ? JSON.parse(body) : {},
      });

      setResponse(result.data);

      // count API calls (dashboard)
      const count = Number(localStorage.getItem("apiCalls")) || 0;
      localStorage.setItem("apiCalls", count + 1);
    } catch (error) {
      setResponse(error.message);
    }
  };

  const saveRequest = () => {
    const newReq = { url, method };

    const updated = [...saved, newReq];

    setSaved(updated);

    localStorage.setItem("savedRequests", JSON.stringify(updated));
  };

  const deleteRequest = (index) => {
    const updated = saved.filter((_, i) => i !== index);

    setSaved(updated);

    localStorage.setItem("savedRequests", JSON.stringify(updated));
  };

  const runSaved = (req) => {
    setUrl(req.url);
    setMethod(req.method);
  };

  return (
    <div>
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* LEFT CARD */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">API Tester</h3>

          {/* URL */}
          <label className="text-sm text-gray-600">API URL</label>
          <input
            type="text"
            placeholder="https://jsonplaceholder.typicode.com/posts/1"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-2 w-full mb-4 rounded-md"
          />

          {/* METHOD */}
          <label className="text-sm text-gray-600">HTTP Method</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="border p-2 w-full mb-4 rounded-md"
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>

          {/* BODY */}
          <label className="text-sm text-gray-600">Request Body (JSON)</label>
          <textarea
            placeholder='{"key": "value"}'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border p-2 w-full mb-4 rounded-md"
          />

          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              onClick={handleRequest}
              className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
               Send Request
            </button>

            <button
              onClick={saveRequest}
              className="px-4 border border-green-600 text-green-600 rounded-md hover:bg-green-50"
            >
               Save
            </button>
          </div>
        </div>

        {/* RIGHT RESPONSE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Response</h3>

          <div className="bg-[#0f172a] text-green-400 p-4 rounded-md h-80 overflow-auto text-sm">
            <pre>
              {response
                ? JSON.stringify(response, null, 2)
                : "// Response will appear here after sending a request"}
            </pre>
          </div>
        </div>
      </div>

      {/* SAVED REQUESTS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Saved Requests</h3>

        {saved.length === 0 && (
          <p className="text-gray-500">No saved requests</p>
        )}

        {saved.map((req, index) => (
          <div
            key={index}
            className="flex justify-between items-center border p-3 rounded mb-3"
          >
            <div className="flex items-center gap-3">
              {/* METHOD TAG */}
              <span className="bg-blue-100 text-blue-600 px-2 py-1 text-sm rounded">
                {req.method}
              </span>

              <p className="text-sm">{req.url}</p>
            </div>

            <div className="flex gap-2">
              {/* RUN */}
              <button
                onClick={() => runSaved(req)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                 Run
              </button>

              {/* DELETE */}
              <button
                onClick={() => deleteRequest(index)}
                className="border border-red-500 text-red-500 px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiTester;
