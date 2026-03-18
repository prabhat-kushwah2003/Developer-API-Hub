import Navbar from "../components/Navbar.jsx";
import CountrySearch from "../components/CountrySearch.jsx";
import WeatherSearch from "../components/WeatherSearch.jsx";

function Explorer() {
  // count explored APIs
  const increaseExplore = () => {
    const count = Number(localStorage.getItem("explored")) || 0;
    localStorage.setItem("explored", count + 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="p-8 grid md:grid-cols-2 gap-6">
        {/* pass function */}
        <div onClick={increaseExplore}>
          <CountrySearch />
        </div>

        <div onClick={increaseExplore}>
          <WeatherSearch />
        </div>
      </div>
    </div>
  );
}

export default Explorer;
