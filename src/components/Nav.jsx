import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react"; // Add this import

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-8 sm:absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Menu */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>

      {/* Collapsible Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-4 bg-white py-4">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
