import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/about", label: "ABOUT" },
    { to: "/portfolio", label: "PORTFOLIO" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navbar px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-navbar-foreground text-xl font-extrabold tracking-wide no-underline">
        START FRAMEWORK
      </Link>
      <div className="flex gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-3 py-1.5 text-sm font-semibold uppercase tracking-wide no-underline rounded transition-colors ${
              location.pathname === link.to
                ? "bg-primary text-primary-foreground"
                : "text-navbar-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
