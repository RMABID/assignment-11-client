import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtifactsDetails = () => {
  const [artifacts, setArtifacts] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchArtifacts = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/historical/${id}`
      );
      setArtifacts(data);
    };
    fetchArtifacts();
  }, []);

  const {
    artifact_name,
    artifact_type,
    created_at,
    discovered_at,
    discovered_by,
    present_location,
    historical_context,
    artifact_image,
  } = artifacts;

  return (
    <div>
      <section className="w-10/12 lg:rounded-xl bg-[#F4F3F0] mx-auto my-14">
        <div className="border-2 lg:w-[520px] lg:border-none mx-auto space-y-3 leading-8 px-6 p-3">
          <img
            className="w-full overflow-hidden object-cover"
            src={artifact_image}
            alt=""
          />

          <h1>
            <span className="text-xl text-center w-12 mx-auto font-semibold">
              Artifact Name :{" "}
            </span>
            {artifact_name}
          </h1>
          <p>
            <span className="font-semibold">Artifact Type : </span>
            {artifact_type}
          </p>
          <p>
            <span className="font-semibold">Created At : </span>
            {created_at}
          </p>
          <p>
            <span className="font-semibold">Discovered At : </span>
            {discovered_at}
          </p>
          <p>
            <span className="font-semibold">Discovered By : </span>
            {discovered_by}
          </p>
          <p>
            <span className="font-semibold">Present Location : </span>
            {present_location}
          </p>
          <p>
            <span className="font-semibold">Historical Context : </span>
            {historical_context}
          </p>
          <div className="flex justify-end">
            <button className="btn w-40 bg-green-500">Like</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtifactsDetails;
