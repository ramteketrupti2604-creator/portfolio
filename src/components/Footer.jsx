import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {

  // 🔥 Scroll to Home
  const scrollToTop = () => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-14 pb-6 px-6 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* 🔥 Top Section */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* About */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4">Trupti Ramteke</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Passionate front-end Developer focused on building modern, responsive,
              and user-friendly applications 🚀
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-xl font-semibold mb-4">Connect</h2>

            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://github.com/ramteketrupti2604-creator"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-purple-500 transition transform hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/trupti-ramteke-856783359"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:your@email.com"
                className="p-3 bg-white/10 rounded-full hover:bg-pink-500 transition transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* 🔥 Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* 🔥 Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trupti Ramteke
          </p>

          <p className="text-gray-500 text-sm flex items-center">
            Made with{" "}
            <FaHeart className="text-red-500 mx-1 animate-pulse" />
          </p>

        </div>
      </div>

      {/* 🔥 UP ARROW BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-blue-500 p-3 rounded-full 
        shadow-lg hover:bg-blue-600 transition duration-300 hover:scale-110"
      >
        <FaArrowUp className="text-white text-lg" />
      </button>
    </footer>
  );
};

export default Footer;