import { useEffect, useState } from "react";
import ArtifactCard from "../components/ArtifactCard";
import SearchBar from "../components/SearchBar";
import { axiosSecure } from "../hooks/useAxios";
import LoadingSpinner from "../components/LoadingSpinner";
import SkeletonLoader from "../components/SkeletonLoader";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  useEffect(() => {
    const fetchAllArtifacts = async () => {
      const { data } = await axiosSecure.get(`/all-historical-data`);
      setArtifacts(data);
    };
    fetchAllArtifacts();
  }, []);

  return (
    <div className="my-16">
      <section>
        <SearchBar setArtifacts={setArtifacts}></SearchBar>
      </section>
      <div>
        {artifacts.length === 0 ? (
          <div className="flex justify-center items-center">
            <div>
              <div className="my-24">
                <h1 className="text-center text-5xl text-red-400 font-bold font-Garamond">
                  No Found Any Post
                </h1>
              </div>
              <SkeletonLoader></SkeletonLoader>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-4 gap-y-6">
            {artifacts.map((item, index) => (
              <ArtifactCard
                key={index}
                id={item?._id}
                image={item?.artifact_image}
                name={item?.artifact_name}
                created={item?.created_at}
                discovered={item?.discovered_by}
                location={item?.present_location}
              ></ArtifactCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
