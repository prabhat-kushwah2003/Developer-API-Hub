import axios from "axios";
import { useState } from "react";

function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const searchWeather = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/public/weather/${city}`,
      );
      setWeather(res.data);
    } catch (error) {
      console.log("Weather not found");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      {/* Header */}
      <h2 className="font-semibold mb-4 flex items-center gap-2">
        Weather Information
      </h2>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 border p-2 rounded-md"
        />
        <button
          onClick={searchWeather}
          className="bg-purple-600 text-white px-3 rounded"
        >
          Search
        </button>
      </div>

      {/* Result UI */}
      {weather && (
        <div className="border border-purple-300 rounded-xl p-6 text-center bg-purple-50">
          <div className="text-3xl mb-2">☁️</div>

          <p className="font-semibold text-lg mb-4">{weather.city}</p>

          <div className="bg-white p-3 rounded mb-3 shadow-sm">
            <p className="text-sm text-gray-500">Temperature</p>
            <p className="font-semibold">{weather.temperature}°C</p>
          </div>

          <div className="bg-white p-3 rounded mb-3 shadow-sm">
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="font-semibold">{weather.humidity}%</p>
          </div>

          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-500">Description</p>
            <p className="font-semibold">{weather.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherSearch;
