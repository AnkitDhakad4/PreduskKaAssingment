const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full hover:shadow-2xl transition">

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mt-3 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Skills */}
      {project.skills && project.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full
                         bg-gray-800 text-gray-300
                         border border-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-5 flex justify-between items-center">
        <span className="text-xs text-gray-500">
          {project.type || "Project"}
        </span>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="px-4 py-2 rounded-md
                         bg-blue-600 hover:bg-blue-700
                         text-white text-sm transition"
            >
              Live Demo
            </button>
          </a>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;
