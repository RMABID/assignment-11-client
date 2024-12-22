import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, userLogout } = useAuth();
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/home"}>
        {/* <img className="w-36" src={assets.logo} alt="" /> */}
        <h1 className="text-xl">Historical Artifacts</h1>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
        <NavLink to="/home" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-gray-700  " />
        </NavLink>
        <NavLink
          to="/all-artifacts"
          className="flex flex-col items-center gap-1"
        >
          <p>All Artifacts</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-gray-700  " />
        </NavLink>
        <NavLink
          to="/add-artifacts"
          className="flex flex-col items-center gap-1"
        >
          <p>Add Artifacts</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-gray-700  " />
        </NavLink>
        {user?.email && (
          <NavLink className="dropdown flex flex-col items-center gap-1 ">
            <p tabIndex={0} role="button">
              My Profile
            </p>

            <ul
              tabIndex={0}
              className="dropdown-content menu ml-12 mt-6 bg-base-100 rounded-box z-[9] w-40 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/my-artifacts"
                  className="flex flex-col items-center gap-1"
                >
                  <p>My Artifacts</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/like-artifacts"
                  className="flex flex-col items-center gap-1"
                >
                  Liked Artifacts
                </NavLink>
              </li>
            </ul>

            {/* <hr className="w-2/4 hidden border-none h-[1.5px] bg-gray-700  " /> */}
          </NavLink>
        )}
      </ul>
      <div className="flex items-center gap-6">
        {user ? (
          <div className="group cursor-pointer z-50 relative">
            <img
              className="w-10 border-2 border-purple-500 h-10 overflow-auto object-cover rounded-full cursor-pointer"
              src={user?.photoURL}
              alt=""
            />
            <div className="group-hover:block hidden absolute dropdown-menu pt-4 right-0">
              <div className="flex flex-col gap-2 rounded w-36 py-3 px-5 bg-green-900 text-gray-50">
                <p className="cursor-pointer hover:text-black">
                  {user?.displayName}
                </p>
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={userLogout}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Link to={"/login"} className="btn">
              Login
            </Link>
          </div>
        )}

        <p
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        >
          <TiThMenu />
        </p>
      </div>
      {/* sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 overflow-hidden bottom-0 bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center cursor-pointer gap-4"
          >
            {/* <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" /> */}
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
