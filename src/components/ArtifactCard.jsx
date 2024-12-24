import { FcViewDetails } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ArtifactCard = ({ id, image, name, created, location, discovered }) => {
  return (
    <div className="my-8">
      <div className="text-gray-700 transition ease-in-out hover:scale-110 cursor-pointer ">
        <div className="overflow-hidden border rounded-b-lg border-primary ">
          <div>
            <img
              src={image}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />
            <h2 className="mb-2 px-3 text-xl font-semibold">{name}</h2>
          </div>

          <div className="p-2 space-y-3 font-Garamond">
            <p className="text-sm font-light">
              <span className="text-lg">Created At : </span>
              {created}
            </p>
            <p className="text-sm font-light">
              <span className="text-lg">Discovered By : </span>
              {discovered}
            </p>
            <p className="text-sm flex items-center font-light">
              <span className="text-lg mr-2">Location : </span> {location}</p>
          </div>
          <div className="mt-2">
            <Link
              to={`/artifacts-details/${id}`}
              className="w-full rounded-b-lg hover:bg-primary hover:text-secondary_primary hover:font-agu btn rounded-t-none bg-secondary_primary font-light text-lg text-primary"
            >
              <FcViewDetails />
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
