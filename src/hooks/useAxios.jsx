import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxios = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        error.response;

        if (error.response.status === 401 || error.response.status === 403) {
          //logout
          userLogout();
          navigate("/login");
        }
      }
    );
  }, [userLogout, navigate]);

  return axiosSecure;
};

export default useAxios;
