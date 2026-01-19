import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [skill, setSkill] = useState("");

  return (
    <div className="flex gap-3 mt-10">
      <input
        type="text"
        placeholder="Search projects by skill (e.g. Node)"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={() => onSearch(skill)}
        className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
