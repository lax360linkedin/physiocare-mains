import { useState, useEffect } from "react";
import logo from "../../assets/logos/navbarLogo.svg";

const sections = ["home", "about", "services", "booking", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const offset = section.offsetTop - 120;
        if (window.scrollY >= offset) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#81DBDF]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="PhysioCare Logo" className="h-12 w-auto" />
          <h1 className="text-xl font-semibold text-gray-900">
            <span className="font-bold text-2xl">Physio</span>Care
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 items-center font-medium text-gray-800">
          {["Home", "About", "Services", "Booking", "Contact"].map((item) => {
            const id = item.toLowerCase();
            return (
              <a key={item} href={`#${id}`} className="relative group">
                {item}

                {/* ACTIVE + HOVER UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gray-900 transition-all duration-300 ${
                    active === id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-900"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#81DBDF] px-6 pb-4">
          <nav className="flex flex-col gap-4 font-medium text-gray-800">
            {["Home", "About", "Services", "Booking", "Contact"].map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`transition ${
                    active === id ? "font-semibold" : ""
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
