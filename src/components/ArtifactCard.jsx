import { Link } from "react-router-dom";

const ArtifactCard = ({ id, image, name, created, location, discovered }) => {
  return (
    <div>
      <div className="text-gray-700 cursor-pointer ">
        <div className="overflow-hidden border-2 p-2">
          <img
            className="hover:scale-110 w-full transition ease-in-out"
            src={image}
            alt=""
          />
          <p className="pt-3 pb-1 text-sm">
            <span className="text-lg">Artifact Name : </span>
            {name}
          </p>
          <p className="text-sm font-light">
            <span className="text-lg">Created At : </span>
            {created}
          </p>
          <p className="text-sm font-light">
            <span className="text-lg">Discovered By : </span>
            {discovered}
          </p>
          <p className="text-sm font-light">
            <span className="text-lg">Location : </span>
            {location}
          </p>
          <div>
            <Link to={`/artifacts-details/${id}`} className="w-full btn mt-5">
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
