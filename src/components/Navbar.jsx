import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Background layer */}
      <div className="backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* 🔥 Logo */}
          <h1 className="text-2xl font-bold text-white tracking-wide cursor-pointer">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              My
            </span>
            Portfolio
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
            {navItems.map((item) => (
              <li key={item} className="relative">
                <a
                  href={`#${item}`}
                  onClick={() => setActive(item)}
                  className={`capitalize transition duration-300 px-2 py-1 rounded-md
                    ${
                      active === item
                        ? "text-white bg-white/10 shadow-md"
                        : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item}

                  {/* underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300
                    ${active === item ? "w-full" : "w-0"} group-hover:w-full`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4">
            <div className="flex flex-col gap-3 bg-black/40 backdrop-blur-lg p-4 rounded-xl border border-white/10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => {
                    setActive(item);
                    setMenuOpen(false);
                  }}
                  className={`capitalize px-3 py-2 rounded-md transition
                    ${
                      active === item
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;