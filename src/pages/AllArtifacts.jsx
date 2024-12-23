import axios from "axios";
import { useEffect, useState } from "react";
import ArtifactCard from "../components/ArtifactCard";
import SearchBar from "../components/SearchBar";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  useEffect(() => {
    const fetchAllArtifacts = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/historical`
      );
      setArtifacts(data);
    };
    fetchAllArtifacts();
  }, []);

  return (
    <div>
      <section>
        <SearchBar setArtifacts={setArtifacts}></SearchBar>
      </section>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {artifacts.length === 0 ? (
          <h1>hi</h1>
        ) : (
          artifacts.map((item, index) => (
            <ArtifactCard
              key={index}
              id={item?._id}
              image={item?.artifact_image}
              name={item?.artifact_name}
              created={item?.created_at}
              discovered={item?.discovered_by}
              location={item?.present_location}
            ></ArtifactCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
