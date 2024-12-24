import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updatedUser, logInGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const registerHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    if (password.length < 6) {
      return toast.error("Password should be 6 characters or longer");
    }

    if (!passwordRegex.test(password)) {
      return toast.error("Provide a Strong Password");
    }

    await createUser(email, password)
      .then(() => {
        updatedUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("SuccessFully Login");
            navigate(from, { replace: true });
          })
          .catch(() => {});
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const googleLogin = async () => {
    try {
      await logInGoogle();
      toast.success("SuccessFully Login");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.title = "Register - Historical Artifacts Tracker";
  }, []);

  return (
    <div className="my-16">
      <div className="flex card   flex-col">
        <div className="bg-[#F4F3F0] py-8 rounded-xl mx-auto w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl  text-center font-medium text-black border-b-2 border-gray-200 py-6">
            Register your account
          </h1>
          <form onSubmit={registerHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
              <button
                className="absolute btn shadow-none  border-none bg-transparent btn-xs right-4 top-12"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
              {/* {errorMessage && (
                <label className="label">
                  <span className="label-text text-red-600">
                    {errorMessage}
                  </span>
                </label>
              )} */}
            </div>
            <div className="flex mt-4  items-center">
              <input
                type="checkbox"
                defaultChecked
                name="terms"
                className="checkbox text-[#F4F3F0] bg-[#F4F3F0]"
              />
              <p
                className="ml-3
              "
              >
                Accept Term & Conditions
              </p>
            </div>
            <div className="form-control mt-4">
              <button className="btn bg-[#D2B48C] hover:bg-[#F4F3F0] text-black">
                Register
              </button>
            </div>
            <div className="divider mt-2 p-0 mb-0">OR</div>
          </form>
          {/* {
        successMessage && 
        <p className="text-green-500">Successfully Register </p>
      } */}
          <div className="flex -mt-4 text-3xl px-8 ">
            <button
              onClick={googleLogin}
              className="btn w-full px-12 bg-[#D2B48C] hover:bg-[#F4F3F0] text-black "
            >
              <FcGoogle />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
