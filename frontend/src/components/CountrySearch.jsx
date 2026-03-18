import axios from "axios";
import { useState } from "react";

function CountrySearch() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState(null);

  const searchCountry = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/public/country/${country}`,
      );
      setData(res.data);
    } catch (error) {
      console.log("Country not found");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      {/* Header */}
      <h2 className="font-semibold mb-4 flex items-center gap-2">
        Country Information
      </h2>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter country name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="flex-1 border p-2 rounded-md"
        />
        <button
          onClick={searchCountry}
          className="bg-blue-600 text-white px-3 rounded"
        >
          Search
        </button>
      </div>

      {/* Result UI */}
      {data && (
        <div className="border border-blue-300 rounded-xl p-6 text-center bg-blue-50">
          <h2 className="text-3xl font-bold mb-1">
            {data.name?.slice(0, 2).toUpperCase()}
          </h2>

          <p className="font-semibold text-lg mb-4">{data.name}</p>

          <div className="bg-white p-3 rounded mb-3 shadow-sm">
            <p className="text-sm text-gray-500">Capital</p>
            <p className="font-semibold">{data.capital}</p>
          </div>

          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-500">Population</p>
            <p className="font-semibold">{data.population?.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountrySearch;
