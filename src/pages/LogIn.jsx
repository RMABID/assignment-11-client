import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const LogIn = () => {
  const { logInUser, logInGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const from = location?.state || "/";
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return toast.error("Password should be 6 characters or longer");
    }
    await logInUser(email, password)
      .then(() => {
        toast.success("Successfully Login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const googleLogin = async () => {
    try {
      await logInGoogle();
      toast.success("Successfully Login");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Historical Artifacts Tracker";
  }, []);

  return (
    <div className="my-16  ">
      <div className="">
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-medium text-center text-black border-b-2 border-gray-200 py-6">
            Login your account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                // ref={emailRef}
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to="/auth/forget"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
              {/* {errorMessage && (
                <label className="label">
                  <span className="label-text text-red-600">
                    {errorMessage}
                  </span>
                </label>
              )} */}
              <button
                className="absolute btn  border-none bg-transparent btn-xs right-4 top-12"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </button>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary bg-black text-white">
                Login
              </button>
            </div>
          </form>
          <div className="divider -mt-6 py-4">OR</div>
          <div className="flex -mt-4 text-3xl px-8 ">
            <button
              onClick={googleLogin}
              className="btn w-full px-12 bg-[#D2B48C] hover:bg-[#F4F3F0] text-black "
            >
              <FcGoogle />
              Google
            </button>
          </div>
          <p className="py-6 text-center">
            Don't Have An Account ?{" "}
            <NavLink className="text-red-600" to={"/register"}>
              Register
            </NavLink>
          </p>
        </div>

        {/* <ToastContainer></ToastContainer> */}
      </div>

      {/* <ToastContainer /> */}
    </div>
  );
};

export default LogIn;
