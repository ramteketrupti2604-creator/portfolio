import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaArrowDown, FaHome } from "react-icons/fa";
import profile from "../assets/truptiphoto.jpeg";

const Home = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center
      bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-80 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-80 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-4xl px-4 z-10">

        {/* 🔥 SECTION TITLE (NOW ALWAYS VISIBLE) */}
        <div className="mb-6 flex items-center gap-2 px-5 py-2 
        bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg z-20">
          <FaHome className="text-blue-400 text-lg animate-pulse" />
          <span className="text-sm tracking-widest text-gray-200">
            HOME SECTION
          </span>
        </div>

        {/* PROFILE IMAGE (NOW BELOW TITLE) */}
        <img
          src={profile}
          alt="profile"
          className="w-40 h-40 rounded-full border-4 border-white/20 shadow-xl
          hover:scale-110 transition duration-300 object-cover"
        />

        <h1 className="text-4xl mt-6 font-bold">
           <span className="text-blue-400">Hi, I'mTrupti Ramteke</span> 👋
        </h1>

        <h2 className="text-xl mt-2 text-gray-300">
          <Typewriter
            words={[
              "Frontend Developer",
              "C++ Learner",
              "Future Software Engineer",
            ]}
            loop
            cursor
          />
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl">
          Motivated Computer Science graduate with strong skills in C, C++,
          HTML, CSS, JavaScript, and React. Seeking an entry-level software
          developer role to build scalable and user-friendly applications.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://github.com/ramteketrupti2604-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/trupti-ramteke-856783359"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href="/Trupti_Ramteke_Frontend_Developer1.pdf"
            download="Trupti_Ramteke_CV.pdf"
            className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition shadow-md"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="border px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollToFooter}
        className="absolute bottom-6 left-6 text-white text-2xl 
        animate-bounce bg-white/10 backdrop-blur-md p-3 rounded-full
        hover:bg-blue-500 transition shadow-lg"
      >
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Home;