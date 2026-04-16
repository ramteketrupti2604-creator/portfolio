import { FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const skillsData = [
  { name: "C / C++", value: 80, color: "bg-blue-400" },
  { name: "JavaScript", value: 70, color: "bg-blue-400" },
  { name: "Python", value: 60, color: "bg-blue-400" },

  { name: "HTML / CSS", value: 85, color: "bg-purple-400" },
  { name: "Tailwind", value: 75, color: "bg-purple-400" },
  { name: "React", value: 70, color: "bg-purple-400" },

  { name: "Git & GitHub", value: 75, color: "bg-pink-400" },
  { name: "VS Code", value: 85, color: "bg-pink-400" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center 
      bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl w-full relative z-10">

        {/* 🔥 SECTION BADGE (NEW ADDED) */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-5 py-2 
          bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
            <FaCogs className="text-blue-400 text-lg animate-spin" />
            <span className="text-sm tracking-widest text-gray-200">
              SKILLS SECTION
            </span>
          </div>
        </div>

        {/* HEADING */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">
             <span className="text-blue-400"></span>
          </h2>
        </div>

        {/* 🔥 Animated Bars */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <p className="mb-2 text-gray-200">{skill.name}</p>

              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <motion.div
                  className={`h-2 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 🎯 Circular Progress */}
        <div className="grid md:grid-cols-3 gap-10 text-center">

          {[80, 75, 70].map((val, i) => (
            <motion.div
              key={i}
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/20 hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-32 h-32 mx-auto">

                {/* Background Circle */}
                <svg className="w-full h-full rotate-[-90deg]">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="50"
                    stroke="#374151"
                    strokeWidth="8"
                    fill="none"
                  />

                  {/* Animated Circle */}
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="50"
                    stroke="#60A5FA"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={314}
                    strokeDashoffset={314}
                    whileInView={{
                      strokeDashoffset: 314 - (314 * val) / 100,
                    }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  />
                </svg>

                {/* Percentage */}
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                  {val}%
                </div>
              </div>

              <p className="mt-4 text-gray-300">
                {i === 0 ? "Languages" : i === 1 ? "Frontend" : "Tools"}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;