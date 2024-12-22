import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

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
  }, [user?.email]);
  console.log(artifacts);
  return <div>LikedArtifacts</div>;
}

export default LikedArtifacts;
