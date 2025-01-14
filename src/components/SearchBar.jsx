import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { axiosSecure } from "../hooks/useAxios";

const SearchBar = ({ setArtifacts }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchSearchData = async () => {
      const { data } = await axiosSecure.get(
        `/all-historical-data?search=${search}`
      );
      setArtifacts(data);
    };
    fetchSearchData();
  }, [search]);

  return (
    <div className="text-primary  font-agu text-center">
      <div className="inline-flex items-center mt-6 justify-center border border-primary px-5 my-5 mx-3 rounded-full  sm:h-1/2">
        <input
          onChange={(event) => setSearch(event.target.value)}
          className="flex-1 p-2 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search Artifact"
          name=""
          id=""
        />
        <div className="inline w-3 text-xl pr-5 cursor-pointer">
          <CiSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
