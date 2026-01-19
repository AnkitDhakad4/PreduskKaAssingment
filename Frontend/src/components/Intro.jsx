import React from "react";

const Intro = () => {
  const skills = [
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TailwindCSS",
  ];

  const infoCards = [
    { label: "Role", value: "Full Stack Developer" },
    { label: "College", value: "NIT Delhi" },
    { label: "Degree", value: "B.Tech (3rd Year) with 8.02 CGPA" },
    { label: "Interest", value: "Machine Learning" }
  ];

  return (
    <div className="flex items-center justify-center bg-[#09090b] px-6 py-10">
      <div className="relative w-full max-w-4xl">

        {/* Glow Effects */}
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-600 rounded-full blur-3xl opacity-20"></div>

        {/* Main Card */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl space-y-6">

          {/* Name */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Ankit{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Dhakad
              </span>
            </h1>
            <p className="text-sm text-cyan-400 uppercase tracking-widest">
              Full Stack Developer & ML Enthusiast
            </p>
          </div>

          {/* Short Intro */}
          <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
  Third-year B.Tech student at{" "}
  <span className="text-white font-semibold">NIT Delhi</span> with hands-on
  experience in full-stack development. Interested in building
  production-ready web applications and expanding knowledge in{" "}
  <span className="text-white font-semibold">
    Machine Learning and modern software systems
  </span>.
</p>


          {/* Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {infoCards.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-gray-900/70 border border-gray-800 p-4 text-center hover:border-cyan-500/50 transition"
              >
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-white font-semibold mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* Skills */}
          <h2 className="text-center text-white text-lg font-semibold">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-lg bg-gray-800/80 text-gray-300
                           border border-gray-700 transition
                           hover:bg-gray-700 hover:text-white
                           hover:border-cyan-500/50"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Intro;
