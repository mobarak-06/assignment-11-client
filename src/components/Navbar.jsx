import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("log out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#fb2056] font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addBlog"
          className={({ isActive }) =>
            isActive ? "text-[#fb2056] font-bold" : ""
          }
        >
          Add Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allBlogs"
          className={({ isActive }) =>
            isActive ? "text-[#fb2056] font-bold" : ""
          }
        >
          All blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/featuredBlog"
          className={({ isActive }) =>
            isActive ? "text-[#fb2056] font-bold" : ""
          }
        >
          Featured Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "text-[#fb2056] font-bold" : ""
          }
        >
          Wishlist
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className=" text-white text-center Roboto">
            <p>
              <span className="text-3xl font-bold">WORLD</span>
              <br />
              <span className="text-xl font-semibold">ADVENTURE</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-bold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                  referrerPolicy="no-referrer"
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="font-bold text-base">{user.displayName}</a>
                </li>
                <li>
                  <a onClick={() => handleSignOut()} className="text-red-500 font-bold">Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#fb2056] border-[#fb2056] text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
