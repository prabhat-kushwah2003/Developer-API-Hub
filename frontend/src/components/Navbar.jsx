import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation(); // to detect current route

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClass = (path) =>
    location.pathname === path
      ? "bg-blue-600 text-white px-3 py-1 rounded"
      : "text-gray-700 hover:text-blue-600";

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
      {/* Logo */}
      <h1 className="flex items-center gap-2 font-semibold text-lg">
        <span className="text-blue-600">&lt;/&gt;</span>
        Developer API Hub
      </h1>

      {/* Links */}
      <div className="flex gap-6 items-center">
        <Link to="/" className={linkClass("/")}>
          Dashboard
        </Link>

        <Link to="/playground" className={linkClass("/playground")}>
          Playground
        </Link>

        <Link to="/explorer" className={linkClass("/explorer")}>
          Explorer
        </Link>
      </div>

      {/* Logout */}
      <button onClick={handleLogout} className="text-red-500 hover:underline">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
