import Navbar from "../components/Navbar.jsx";
import ApiTester from "../components/ApiTester.jsx";

function Playground() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2">API Playground</h2>

        <p className="text-gray-600 mb-6">
          Test and debug your API endpoints with ease
        </p>

        <ApiTester />
      </div>
    </div>
  );
}

export default Playground;
