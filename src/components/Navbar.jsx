import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import TypingEffect from "react-typing-effect";
import Lottie from "lottie-react";
import logo_lottie from "../assets/lottie-icon/logo-lottie.json";
import logout from "../assets/lottie-icon/logout.json";
import { motion, easeOut } from "motion/react";

const Navbar = () => {
  const { user, userLogout } = useAuth();
  const [visible, setVisible] = useState(false);

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="flex w-11/12 text-primary mx-auto items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <h1 className="text-2xl flex items-center  text-primary font-agu leading-relaxed">
          <span>
            <Lottie className="w-16 -mr-7 -mt-6" animationData={logo_lottie} />
          </span>
          Historical
          <span className="ml-2 w-32">
            <TypingEffect
              speed={50}
              eraseDelay={500}
              eraseSpeed={500}
              typingDelay={500}
              cursor="|"
              text={["Artifacts", "Tracker"]}
            />{" "}
          </span>
        </h1>
      </Link>
      <ul className="hidden bg-transparent sm:flex gap-5 text-lg font-light ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-[#e09b3f] " />
        </NavLink>
        <NavLink
          to="/all-artifacts"
          className="flex flex-col items-center gap-1"
        >
          <p>All Artifacts</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-[#e09b3f]  " />
        </NavLink>
        <NavLink
          to="/add-artifacts"
          className="flex flex-col items-center gap-1"
        >
          <p>Add Artifacts</p>
          <hr className="w-2/4 hidden border-none h-[1.5px] bg-[#e09b3f]  " />
        </NavLink>
        {user?.email && (
          <NavLink
            to="/my-artifacts"
            className="dropdown flex flex-col items-center gap-1 "
          >
            <p tabIndex={0} role="button">
              My Profile
            </p>

            <ul
              tabIndex={0}
              className="dropdown-content menu ml-12 mt-6 bg-[#a8793b] rounded-md  z-[9] w-40 p-2 shadow"
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

            {/* <hr className="w-2/4 hidden border-none h-[1.5px] bg-[#e09b3f]  " /> */}
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
              <div className="flex flex-col gap-2 text-center rounded w-48 space-y-2 py-6 px-8 font-agu bg-[#64441c] text-gray-50">
                <motion.p
                  animate={{
                    
                    x: [10],
                    color: ["#ecff33", "#33ffe3", "#ff6133"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 2,
                    easings: 3,
                  }}
                  className="cursor-pointer hover:text-[#e09b3f]"
                >
                  {user?.displayName}
                </motion.p>
                <p className="cursor-pointer hover:text-[#e09b3f]">
                  My Profile
                </p>
                <p
                  onClick={userLogout}
                  className="cursor-pointer flex items-center hover:text-[#e9a245]"
                >
                  {" "}
                  <span>
                    <Lottie className="w-10" animationData={logout} />
                  </span>
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Link
              to={"/login"}
              className="border-2 px-8 rounded-lg py-3 cursor-pointer border-red-200 hover:bg-[#834d07a0] transition-all duration-500 hover:translate-y-[-6px]"
            >
              Login
            </Link>
          </div>
        )}
        <div>
          <label className="switch">
            <input onChange={switchTheme} type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <p
          onClick={() => setVisible(true)}
          className="w-8 text-3xl cursor-pointer sm:hidden"
        >
          <TiThMenu />
        </p>
      </div>
      {/* sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 z-20 font-agu overflow-hidden bottom-0 bg-[#8a5a1b] transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col my-6 space-y-8 text-[#e4a450]">
          <div
            onClick={() => setVisible(false)}
            className="flex my-8 ml-4 items-center cursor-pointer gap-4"
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
            to="/all-artifacts"
          >
            All Artifacts
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/add-artifacts"
          >
            Add Artifacts
          </NavLink>
          <NavLink
            to="/my-artifacts"
            className="py-2 pl-6 border dropdown flex flex-col  gap-1"
          >
            <p tabIndex={0} role="button">
              My Profile
            </p>

            <ul
              tabIndex={0}
              className="dropdown-content -ml-6 menu mx-auto mt-12 bg-[#a8793b] rounded-md  z-[9] w-full shadow"
            >
              <li>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/my-artifacts"
                  className="flex flex-col items-center gap-1"
                >
                  <p>My Artifacts</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/like-artifacts"
                  className="flex flex-col items-center gap-1"
                >
                  Liked Artifacts
                </NavLink>
              </li>
            </ul>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
