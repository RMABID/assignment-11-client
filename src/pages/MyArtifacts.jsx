import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyArtifacts = () => {
  const { user } = useAuth();
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    const fetchArtifact = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/historical?email=${user?.email}`
      );
      setArtifacts(data);
    };
    fetchArtifact();
  }, [user?.email]);
  return <div>MyArtifacts</div>;
};

export default MyArtifacts;
