import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="SUMITECH Logo" className="h-10 md:h-12" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                pathname === link.to
                  ? "text-accent"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 mt-2">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${
                  pathname === link.to
                    ? "text-accent"
                    : "text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-accent text-accent-foreground px-6 py-2.5 rounded-md font-semibold text-sm text-center hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
