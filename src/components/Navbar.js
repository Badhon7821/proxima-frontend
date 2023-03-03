import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-sky-900">
      <Link to="/" className="logo text-2xl font-medium text-sky-400">
        Proxima
      </Link>

      <ul className="flex gap-5 items-center">
        <li>
          <Link
            className="login text-md font-medium hover:text-sky-400 text-white duration-300"
            to="/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="signup text-md font-medium text-white duration-300 hover:text-sky-400"
            to="/signup"
          >
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
