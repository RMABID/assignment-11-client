import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import LoadingSpinner from "../components/LoadingSpinner";
import SkeletonLoader from "../components/SkeletonLoader";

const MyArtifacts = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const [artifacts, setArtifacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtifact = async () => {
      const { data } = await axiosSecure.get(
        `/historical?email=${user?.email}`
      );
      setArtifacts(data);
    };
    fetchArtifact();
  }, [user?.email]);

  const deleteHandler = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          axios.delete(`${import.meta.env.VITE_API_URL}/historical/${id}`);
          toast.success("Delete Successfully");
          navigate("/all-artifacts");
        }
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      {artifacts.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <div>
            <div className="my-24">
              <h1 className="text-center text-5xl text-red-400 font-bold font-Garamond">
                You Have No Add Any Post
              </h1>
            </div>
            <SkeletonLoader></SkeletonLoader>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto my-14 ">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg text-primary font-agu">
                <th>Sel</th>
                <th>Name</th>
                <th>Artifact Type</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {artifacts.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center font-Garamond  gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.artifact_image}
                            alt={item?.artifact_name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.artifact_name}</div>
                        <div className="text-sm opacity-50">
                          {item?.present_location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item?.artifact_type}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item?.discovered_by}
                    </span>
                  </td>
                  <td>{item?.created_at}</td>
                  <th className="flex items-center gap-3">
                    <Link
                      to={`/artifacts-updated/${item?._id}`}
                      className="btn hover:text-green-500 text-lg"
                    >
                      <FaRegEdit />
                    </Link>
                    <button
                      onClick={() => deleteHandler(item?._id)}
                      className="btn text-red-500 bg-primary hover:bg-red-600 hover:text-white text-lg"
                    >
                      <MdDeleteForever />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
