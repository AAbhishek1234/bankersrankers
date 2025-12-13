import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
];

const courses = [
  { name: "Bank PO Complete", path: "/courses" },
  { name: "Bank Clerk Mastery", path: "/courses" },
  { name: "RBI Grade B", path: "/courses" },
  { name: "Complete Bundle", path: "/courses" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="container mx-auto">
        <div className="gradient-secondary rounded-2xl p-8 md:p-12 -mt-16 relative z-10 shadow-elevated">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-2">
                Ready to Start Your Banking Journey?
              </h3>
              <p className="text-secondary-foreground/80">
                Join thousands of successful candidates. Enroll today and get a free demo class!
              </p>
            </div>

            <a
  href="https://wa.me/919910292689"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="lg" variant="default" className="flex-shrink-0">
    Get Free Demo
    <ArrowRight className="h-5 w-5" />
  </Button>
</a>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-secondary p-2 rounded-lg">
                <GraduationCap className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
         <span className="text-xl font-display font-bold">
  Bankers <span className="text-secondary">Rankers</span>
</span>

                {/* <span className="block text-xs text-primary-foreground/70">Academy</span> */}
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Your trusted partner for banking exam preparation. We transform aspirations into achievements through expert guidance and comprehensive coaching.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
               <div className="flex items-start gap-3 text-sm group">
  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
    <Phone className="h-4 w-4 text-primary-foreground group-hover:text-secondary-foreground" />
  </div>

  <div>
    <span className="text-primary-foreground/70 block text-xs mb-1">
      Call Us
    </span>

    <a
      href="tel:+918447696685"
      className="block text-primary-foreground hover:text-secondary transition-colors"
    >
      +91 84476 96685
    </a>

    <a
      href="tel:+919876543210"
      className="block text-primary-foreground hover:text-secondary transition-colors"
    >
       +91 98765 43210
    </a>
  </div>
</div>

              </li>
              <li>
                <a href="mailto:info@bankersrankers.com" className="flex items-start gap-3 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                    <Mail className="h-4 w-4 group-hover:text-secondary-foreground" />
                  </div>
                  <div>
                    <span className="text-primary-foreground/70 block text-xs">Email Us</span>
                    <span className="text-primary-foreground group-hover:text-secondary transition-colors">info@bankersrankers.com</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-primary-foreground/70 block text-xs">Visit Us</span>
                    <span className="text-primary-foreground">Ashok Vihar phase 4
New Delhi 110052 </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>© 2025 bankersrankers. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
