import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-10">
        No projects found.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-10">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
