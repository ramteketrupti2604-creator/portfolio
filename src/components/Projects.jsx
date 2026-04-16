import { motion } from "framer-motion";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Images
import connecthub from "../assets/connecthub.jpg";
import movie from "../assets/movie-search.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import todo from "../assets/todo.jpg";

// Project Data
const projects = [
  {
    title: "ConnectHub - Social Media App",
    image: connecthub,
    description:
      "Developed a social media application using React and Node.js to connect users and share content.",
    github:
      "https://github.com/ramteketrupti2604-creator/ConnectHub-React-Social-project",
    live: "https://connect-hub-react-social-project-8p.vercel.app/",
  },
  {
    title: "Movie Search Application",
    image: movie,
    description:
      "Built a movie search application using React and TMDB API to find and display movie information.",
    github:
      "https://github.com/ramteketrupti2604-creator/movie-search-react-project",
    live: "https://react-movie-apps-iota.vercel.app",
  },
  {
    title: "E-commerce Product Filter",
    image: ecommerce,
    description:
      "Developed a dynamic e-commerce product filter and search application using React and Node.js.",
    github:
      "https://github.com/ramteketrupti2604-creator/react-ecommerce-filter-search",
    live: "https://react-ecommerce-filter-search-qbex.vercel.app/",
  },
  {
    title: "To-Do App",
    image: todo,
    description:
      "A simple task manager with add, delete, and update functionality using JavaScript.",
    github: "https://github.com/your-repo",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* 🔥 SECTION BADGE (NEW ADDED) */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-5 py-2 
          bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
            <FaProjectDiagram className="text-blue-400 text-lg animate-pulse" />
            <span className="text-sm tracking-widest text-gray-200">
              PROJECTS SECTION
            </span>
          </div>
        </div>

        {/* HEADING */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-blue-400"></span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white/10 backdrop-blur-lg border border-white/20 
              rounded-2xl overflow-hidden shadow-xl flex flex-col 
              hover:shadow-blue-500/20 hover:scale-[1.02] transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 flex-grow text-sm">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg 
                    hover:bg-blue-600 transition text-sm"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white 
                    rounded-lg hover:bg-white hover:text-black transition text-sm"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;