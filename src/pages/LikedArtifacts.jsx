import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import SkeletonLoader from "../components/SkeletonLoader";

function LikedArtifacts() {
  const { user } = useAuth();
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    const fetchArtifact = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/historical-like?email=${user?.email}`
      );
      setArtifacts(data);
    };
    fetchArtifact();
    document.title = "Like - Historical Artifacts Tracker";
  }, [user?.email]);

  return (
    <div>
      <div className="mt-12">
        {artifacts.length === 0 ? (
          <div>
            <div className="my-24">
              <h1 className="text-center text-5xl text-red-400 font-bold font-Garamond">
                You Have No Like Any Post
              </h1>
            </div>
            <SkeletonLoader></SkeletonLoader>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 my-16 md:grid-cols-2 sm:grid-cols-3">
            {artifacts.map((item, index) => (
              <Fade
                key={index}
                triggerOnce={true}
                direction="up"
                duration={5000}
              >
                <div className="hover:scale-110 hover:bg-primary dark:border-white dark:border-2 transition ease-in-out flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                  <div>
                    <img
                      src={item?.artifact_image}
                      alt=""
                      className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                    />
                    <h2 className="mb-4 text-xl font-semibold">
                      {item?.artifact_name}
                    </h2>
                    <p className="text-sm dark:text-gray-600">
                      {item?.historical_context}...
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-between">
                    <div className="flex space-x-2 text-sm dark:text-gray-600">
                      <button
                        type="button"
                        className="flex items-center  p-1 space-x-1.5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-label="Number of likes"
                          className="w-4 h-4 fill-current dark:text-violet-600"
                        >
                          <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                          <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                        </svg>
                        <span>{item?.like_count}</span>
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <Link
                      to={"/all-artifacts"}
                      className="btn bg-secondary_primary w-full  border-none hover:bg-transparent hover:border-2 hover:text-secondary_primary font-agu font-light text-primary"
                    >
                      See All Artifact
                    </Link>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LikedArtifacts;
