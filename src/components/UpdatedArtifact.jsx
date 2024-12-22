import { IoIosArrowDown } from "react-icons/io";
import useAuth from "../hooks/useAuth";

const UpdatedArtifact = () => {
  const { user } = useAuth();
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="w-10/12 mx-auto p-3 modal-box max-w-5xl">
          <div>
            <h1 className="text-4xl mt-8 text-center font-bold text-[#374151]">
              Updated Artifacts
            </h1>
          </div>
          <form className="grid p-8 grid-cols-1 md:grid-cols-2 mt-3  gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Artifact Name
              </label>
              <input
                type="text"
                name="artifact_name"
                placeholder="Enter country name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Artifact Type
              </label>
              <div className="relative">
                <select
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
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl ">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Created At
              </label>
              <input
                type="text"
                name="created_at"
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
                className="w-full  mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="md:col-span-2 text-xl font-rancho-font 2 text-center">
              <button
                type="submit"
                className="btn bg-[#D2B48C] hover:bg-[#F4F3F0] text-[#331A15] w-full "
              >
                Add Artifact
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdatedArtifact;
