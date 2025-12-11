import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-primary p-2 rounded-lg">
            <GraduationCap className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
           <span className="text-xl font-display font-bold">
  <span className={isScrolled ? "text-primary" : "text-primary-foreground"}>
    Bankers
  </span>
  <span className="text-secondary"> Rankers</span>
</span>

          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={cn(
                  "relative font-medium transition-colors duration-300 py-2",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full",
                  location.pathname === link.path
                    ? isScrolled
                      ? "text-primary after:w-full"
                      : "text-secondary after:w-full"
                    : isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>


  <a href="https://wa.me/9910292689">
        <Button
          className="hidden md:flex"
          variant={isScrolled ? "default" : "secondary"}
          size="default"
        >
          Enquire Now
        </Button>
</a>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 bg-card shadow-elevated md:hidden transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <ul className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-3 px-4 rounded-lg font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-2">
                <a href="https://wa.me/9910292689">
              <Button className="w-full" variant="secondary">
                Enquire Now
              </Button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
