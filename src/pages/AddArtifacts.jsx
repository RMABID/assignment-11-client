import { IoIosArrowDown } from "react-icons/io";
import useAuth from "../hooks/useAuth";

const AddArtifacts = () => {
  const { user } = useAuth();
  const AddArtifactsHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const artifactsData = Object.fromEntries(formData.entries());
    console.log(artifactsData);
  };

  return (
    <section className="w-10/12 my-14 font-rancho-font mx-auto">
      <div className="bg-[#F4F3F0] my-10 py-14">
        <div>
          <h1 className="text-4xl text-center font-bold text-[#374151]">
            Add New Artifacts
          </h1>
          <p className="md:w-6/12 px-8 my-4 font-raleway-font  mx-auto text-center">
            It is a long established fact that a reader will be distraceted by
            visa
          </p>
        </div>
        <form
          onSubmit={AddArtifactsHandler}
          className="grid grid-cols-1 md:grid-cols-2 font-raleway-font px-4 md:px-36 mt-8  gap-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              Artifact Name
            </label>
            <input
              type="text"
              name="Artifact_Name"
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
                name="Artifact_Type"
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
            <label className="block text-sm font-medium mb-2">Created At</label>
            <input
              type="text"
              name="Created_At"
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
              name="Discovered_At"
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
              name="Discovered_By"
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
              name="Present_Location"
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
              defaultValue={user?.displayName}
              disabled
              placeholder=" Artifact adder Name"
              className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Artifact adder Email
            </label>
            <input
              type="email"
              name="email"
              disabled
              defaultValue={user?.email}
              placeholder=" Artifact adder Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Artifact Image
            </label>
            <input
              type="url"
              name="Artifact_Image"
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
              name="historicalContext"
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
    </section>
  );
};

export default AddArtifacts;
