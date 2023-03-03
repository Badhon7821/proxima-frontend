import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();

  const { logout } = useLogout();

  const logoutHandler = () => {
    logout();
  };

  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-sky-900">
      <Link to="/" className="logo text-2xl font-medium text-sky-400">
        Proxima
      </Link>

      <div className="flex gap-5 items-center">
        {!user && (
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
        )}

        {user && (
          <div className="flex gap-5 items-center">
            <p className="mt-3 px-6">{user.email.slice(0, 3)}</p>
            <button
              onClick={logoutHandler}
              type="submit"
              className="bg-red-400  py-3 px-6 rounded-xl 
             text-white hover:bg-red-500 duration-300 hover:text-black mt-3"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
