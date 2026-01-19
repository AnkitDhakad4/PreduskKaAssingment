import { useState } from "react";
import Intro from "../components/Intro";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";
import { fetchProjectsBySkill } from "../api";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false); // ✅ NEW

  const handleSearch = async (skill) => {
    if (!skill) return;

    try {
      setLoading(true);
      setSearched(true); // ✅ mark search happened

      const projects = await fetchProjectsBySkill(skill);
      setProjects(projects || []);

    } catch (error) {
      console.error("Frontend error:", error.message);
      setProjects([]);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <SearchBar onSearch={handleSearch} />
        

        {loading && (
          <p className="text-center text-gray-400 mt-10">
            Loading projects...
          </p>
        )}

        {!loading && searched && projects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects found for this skill.
          </p>
        )}

        {!loading && projects.length > 0 && (
          <ProjectList projects={projects} />
        )}
        <Intro />
      </div>
    </div>
  );
};

export default Home;
