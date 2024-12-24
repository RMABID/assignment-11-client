import { IoIosArrowDown } from "react-icons/io";
import useAuth from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UpdatedArtifact = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [artifacts, setArtifacts] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchArtifacts = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/historical/${id}`
      );
      setArtifacts(data);
    };
    fetchArtifacts();
  }, []);

  const updateArtifactsHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const artifactsData = Object.fromEntries(formData.entries());
    const {
      name,
      email,
      artifact_name,
      artifact_type,
      created_at,
      discovered_at,
      discovered_by,
      present_location,
      historical_context,
      artifact_image,
    } = artifactsData;

    const updatedArtifact = {
      name,
      email,
      artifact_name,
      artifact_type,
      created_at,
      discovered_at,
      discovered_by,
      present_location,
      historical_context,
      artifact_image,
      like_count: artifacts?.like_count,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/historical/${id}`,
        updatedArtifact
      );
      navigate("/my-artifacts");
      toast.success("artifacts Updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="p-3">
        <div>
          <h1 className="text-4xl mt-8 text-center font-bold text-[#374151]">
            Updated Artifacts
          </h1>
          <p className="md:w-8/12 px-2 my-8 font-raleway-font  mx-auto text-center">
            The Historical Artifacts Tracker is a system designed to catalog,
            monitor, and manage historical artifacts, ensuring accurate records,
            preservation, and accessibility for research and education.
          </p>
        </div>
        <form
          onSubmit={updateArtifactsHandler}
          className="grid p-8 grid-cols-1 md:grid-cols-2 mt-3  gap-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              Artifact Name
            </label>
            <input
              type="text"
              name="artifact_name"
              defaultValue={artifacts?.artifact_name}
              placeholder="Enter country name"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Artifact Type
            </label>
            <div className="relative">
              {artifacts?.artifact_type && (
                <select
                  defaultValue={artifacts?.artifact_type}
                  className="input input-bordered w-full"
                  name="artifact_type"
                >
                  <option disabled selected>
                    Select Artifact Type
                  </option>
                  <option value="Tools">Tools</option>
                  <option value="Weapons">Weapons</option>
                  <option value="Documents">Documents</option>
                  <option value="Writings">Documents</option>
                </select>
              )}
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl ">
                <IoIosArrowDown />
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Created At</label>
            <input
              type="text"
              name="created_at"
              defaultValue={artifacts?.created_at}
              placeholder="Enter Created At"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Discovered At
            </label>
            <input
              type="text"
              defaultValue={artifacts?.discovered_at}
              name="discovered_at"
              placeholder="Enter Discovered At"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Discovered By
            </label>
            <input
              type="text"
              name="discovered_by"
              defaultValue={artifacts?.discovered_by}
              placeholder="Enter Discovered By"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Present Location
            </label>
            <input
              type="text"
              defaultValue={artifacts?.present_location}
              name="present_location"
              placeholder="Enter Present Location"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Artifact adder name
            </label>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              placeholder=" Artifact adder Name"
              className="input input-bordered w-full"
              // className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Artifact adder Email
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              placeholder=" Artifact adder Email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Artifact Image
            </label>
            <input
              type="url"
              name="artifact_image"
              defaultValue={artifacts?.artifact_image}
              placeholder="Enter country image"
              className="input input-bordered w-full"
            />
          </div>
          {/* Historical Context */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Historical Context
            </label>
            <textarea
              name="historical_context"
              defaultValue={artifacts?.historical_context}
              className="w-full  mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="md:col-span-2 text-xl font-rancho-font 2 text-center">
            <button
              type="submit"
              className="btn bg-[#D2B48C] hover:bg-[#F4F3F0] text-[#331A15] w-full "
            >
              Updated Artifact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedArtifact;
