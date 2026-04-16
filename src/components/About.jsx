import React from "react";
import { FaUserGraduate, FaLaptopCode, FaRocket, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-80 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-80 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="max-w-6xl w-full relative z-10">

        {/* 🔥 SECTION TITLE BADGE (SAME STYLE AS HOME) */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-5 py-2 
          bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
            <FaUserGraduate className="text-blue-400 text-lg animate-pulse" />
            <span className="text-sm tracking-widest text-gray-200">
              ABOUT ME SECTION
            </span>
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
           <span className="text-blue-400"></span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Frontend Developer | React.js | JavaScript | Passionate about building modern web applications
        </p>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition">

            <div className="flex items-center gap-3 mb-4">
              <FaUserGraduate className="text-blue-400 text-2xl" />
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I am <span className="text-white font-semibold">Trupti Ramteke</span>,
              a Computer Science Engineering graduate (2023). I specialize in
              frontend development using React.js, JavaScript, HTML, and CSS.
              I enjoy building real-world projects and improving UI/UX design.
            </p>

            <div className="flex gap-3 flex-wrap mt-5">
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                <FaRocket className="text-pink-400" /> Fast Learner
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                <FaLaptopCode className="text-green-400" /> Problem Solver
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition">

            <div className="flex items-center gap-3 mb-4">
              <FaTools className="text-blue-400 text-2xl" />
              <h3 className="text-xl font-semibold">What I Do</h3>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Build React.js web applications</li>
              <li>✔ Create responsive UI using HTML, CSS, JS</li>
              <li>✔ Integrate APIs and dynamic data</li>
              <li>✔ Develop reusable components</li>
              <li>✔ Work with Git & GitHub</li>
            </ul>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React.js",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Context API",
              "REST API",
              "Responsive Design",
              "GitHub",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm hover:bg-blue-500/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-500 mt-12">
          Passionate about building clean UI and growing as a Frontend Developer 🚀
        </p>

      </div>
    </section>
  );
};

export default About;